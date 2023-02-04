
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { DialogData } from '../popup-dialog/dialog-settings';
import { CardClass, Cloneable, ColumnClass, ColumnWrapperClass, Deserializable, DividerClass, GridComponentClass, ImageClass, SectionComponentClass, TextClass } from './component-classes';
import { DataManipulationService } from '../services/data-manipulation.service';


@Component({
  selector: 'app-create-web',
  templateUrl: './create-web.component.html',
  styleUrls: ['./create-web.component.scss']
})
export class CreateWebComponent {

  
  showPc = true;



  components: SectionComponentClass[] = [
    SectionComponentClass.webnodeNav(),
    SectionComponentClass.webnode0(),
    SectionComponentClass.webnode1(),
    SectionComponentClass.webnode2(),
    SectionComponentClass.webnode3(),
    SectionComponentClass.webnode4(),
    SectionComponentClass.webnodeFooter(),
  ]


  constructor(public dialog: MatDialog, private service: DataManipulationService) {
    this.service.message.subscribe(($event) => this.handleService($event))
   }

   // todo enum
  handleService($event: any) {
    switch ($event.type) {
      case 'JSON':
        this.exportToJSON();
        break;
      case 'HTML':
        this.exportToHTML();
        break;
      case 'import': 
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          let str: string = fileReader.result == null ?  '[]' : fileReader.result.toString();
          let components = JSON.parse(str) as SectionComponentClass[]
          components = components.map(component => {
            return Deserializable.sectionComponentClass(component)  
          })
          this.components = components;
        }
        fileReader.readAsText($event.data);
        break;
      default:
        alert('NOT IMPLEMENTED')
    }
  }

  exportToJSON() {
    const jsonData = JSON.stringify(this.components);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
    this.saveAs(uri, 'website.json');
  }

  exportToHTML() {
    let result = ''
    this.components.forEach(element => {
      result += element.toHTML();
    });
    let html =  `
    <!DOCTYPE html>
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Caveat:wght@400;700&family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Indie+Flower&family=Pacifico&family=Style+Script&display=swap" rel="stylesheet">
        <title>Page Title</title>
        <style>
          body {
            padding: 0;
            margin: 0;
            font-family: Helvetica,Arial,sans-serif;
            font-size: 13px;
          }
          h1, h2, h3 {
            margin: 0;
            font-weight: 500;
            line-height: 1.2;
          }
          p {
            margin: 0;
            line-height: 1.42;
          }
          * {
            box-sizing: border-box;
          }
          hr {
            margin: 1rem auto;
          }
        </style>
      </head>
      <body>
        ${result}
      </body>
    </html>`
    const uri = 'data:text/plain;charset=UTF-8,' + encodeURIComponent(html);
    this.saveAs(uri, 'website.html');
  }


  addComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    const dialogRef = this.dialog.open(PopupDialogComponent, {data: DialogData.addSection()});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        switch (result) {
          case 'title':
            this.components.splice(i, 0, SectionComponentClass.title());
            break;
          case 'empty':
            this.components.splice(i, 0, SectionComponentClass.empty());
            break;
          case 'text':
            this.components.splice(i, 0, SectionComponentClass.text());
            break;
          case 'text2':
            this.components.splice(i, 0, SectionComponentClass.text2());
            break;
          case 'cards':
            this.components.splice(i, 0, SectionComponentClass.grid());
            break;
          default:
            alert("Není implementováno!!");
            break;
        }
    });
  }


  editComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    let dataTmp = Cloneable.deepCopy(this.components[i])
    let dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editSection(this.components[i])
    })

    if (dialogRef === undefined)
      return;

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined)
        this.components[i] = dataTmp
    });
  }

  moveCompUp(index: number) {
    [this.components[index-1], this.components[index]] = [this.components[index], this.components[index-1]];
  }

  moveCompDown(index: number) {
    [this.components[index], this.components[index+1]] = [this.components[index+1], this.components[index]];
  }

  deleteComp(index: number) {
    this.components.splice(index, 1);
  }

  saveAs(uri:any, filename:any) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
  
        // Firefox requires the link to be in the body
        document.body.appendChild(link);
  
        // simulate click
        link.click();
  
        // remove the link when done
        document.body.removeChild(link);
  
    } else {
        window.open(uri);
    }
  }
}

