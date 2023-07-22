
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { DialogComponentType, DialogData } from '../popup-dialog/dialog-settings';
import { CardClass, Cloneable, ColumnClass, ColumnWrapperClass, Deserializable, DividerClass, GridComponentClass, ImageClass, SectionComponentClass, TextClass } from './component-classes';
import { DataManipulationService } from '../services/data-manipulation.service';


@Component({
  selector: 'app-create-web',
  templateUrl: './create-web.component.html',
  styleUrls: ['./create-web.component.scss']
})
export class CreateWebComponent {


  showPc = true;

  //TODO rename Component to Section

  sections: SectionComponentClass[] = [
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

  handleService($event: any) {
    switch ($event.type) {
      case NavMessage.JSON:
        this.exportToJSON();
        break;
      case NavMessage.HTML:
        this.exportToHTML();
        break;
      case NavMessage.IMPORT:
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          let str: string = fileReader.result == null ? '[]' : fileReader.result.toString();
          let sections = JSON.parse(str) as SectionComponentClass[]
          sections = sections.map(section => {
            return Deserializable.sectionComponentClass(section)
          })
          this.sections = sections;
        }
        fileReader.readAsText($event.data);
        break;
      default:
        alert('NOT IMPLEMENTED')
    }
  }

  exportToJSON() {
    const jsonData = JSON.stringify(this.sections);
    const uri = 'data:application/json;charset=UTF-8,' + encodeURIComponent(jsonData);
    this.saveAs(uri, 'website.json');
  }

  exportToHTML() {
    let result = ''
    this.sections.forEach(element => {
      result += element.toHTML();
    });
    let html = `
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

    const dialogRef = this.dialog.open(PopupDialogComponent, { data: DialogData.addSection() });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        switch (result) {
          case DialogComponentType.TITLE:
            this.sections.splice(i, 0, SectionComponentClass.title());
            break;
          case DialogComponentType.EMPTY:
            this.sections.splice(i, 0, SectionComponentClass.empty());
            break;
          case DialogComponentType.TEXT:
            this.sections.splice(i, 0, SectionComponentClass.text());
            break;
          case DialogComponentType.TEXT2:
            this.sections.splice(i, 0, SectionComponentClass.text2());
            break;
          case DialogComponentType.CARDS:
            this.sections.splice(i, 0, SectionComponentClass.grid());
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

    let dataTmp = Cloneable.deepCopy(this.sections[i])
    let dialogRef = this.dialog.open(PopupDialogComponent, {
      data: DialogData.editSection(this.sections[i])
    })

    if (dialogRef === undefined)
      return;

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined)
        this.sections[i] = dataTmp
    });
  }

  moveCompUp(index: number) {
    [this.sections[index - 1], this.sections[index]] = [this.sections[index], this.sections[index - 1]];
  }

  moveCompDown(index: number) {
    [this.sections[index], this.sections[index + 1]] = [this.sections[index + 1], this.sections[index]];
  }

  deleteComp(index: number) {
    this.sections.splice(index, 1);
  }

  saveAs(uri: any, filename: any) {
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

export enum NavMessage {
  JSON, HTML, IMPORT
}