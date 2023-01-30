import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextClass, ImageClass, DividerClass, ColumnClass, SectionComponentClass } from '../component-classes';
import { moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { PopupDialogComponent } from '../../popup-dialog/popup-dialog.component';
import { DialogData } from '../../popup-dialog/dialog-settings';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() component!: SectionComponentClass;
  pointChanged: Subject<Point> = new Subject<Point>();
  test = [];
  constructor(public dialog: MatDialog) { }

  getColumns() {
    if (this.component == undefined)
      return [];
    
    return Array(this.component.columns.columns).fill(1).map((x,i)=>i); // [0,1,2,3,4]
  }

  addContent(column:number,row:number, i: number) {
    if (this.dialog.openDialogs.length > 0)
    return;

  const dialogRef = this.dialog.open(PopupDialogComponent, {data: DialogData.addComponent()});
  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined)
      switch (result) {
        case 'text':
          this.component.columns.content[row][column].content.splice(i, 0, new TextClass('<p>Nový text</p>'));
          break;
        case 'header':
          this.component.columns.content[row][column].content.splice(i, 0, new TextClass('<h1 style="text-align: center">Nový nadpis</h1>'));
          break;
        case 'image':
          this.component.columns.content[row][column].content.splice(i, 0, new ImageClass('https://blog.inpage.cz/obrazek/3/kitten-jpg/','lel', '300px'));
          break;
        case 'divider':
          this.component.columns.content[row][column].content.splice(i, 0, DividerClass.default());
          break;
        default:
          alert("Není implementováno!!");
          break;
      }
  });

  
  }

  getStyle() {
    return {
      backgroundImage: this.component.background.background,
      backgroundColor: this.component.color.background,
      color: this.component.color.color,
      backgroundPosition: 'center'
    }
  } 

  drop(event: any, row: number) {
    let col = event.container.element.nativeElement.getAttribute('column');
    if (col === 'up') {
      // console.log(col); // nový s flexBasis = 100;
      this.component.columns.content.splice(0,0,[new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      // console.log(this.component.data.columns.content)
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }
    if (col === 'down') {
      // console.log(col); // nový s flexBasis = 100;
      this.component.columns.content.splice(this.component.columns.content.length,0,[new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }



    let column = parseInt(col);
    // column = column == NaN ? undefined : column;
    // console.log(column, this.component.data.columns.content.length, typeof column)
    if (!isNaN(column) && event.previousContainer.element.nativeElement.getAttribute('column') )
      return;
    if (!isNaN(column) && event.previousContainer !== event.container) { //make new column
      this.component.columns.columns = this.component.columns.columns + 1; // přidat column
      // console.log(this.component.data.columns.content)
      this.component.columns.content[row].splice(column+1,0,new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))]));
      // console.log(this.component.data.columns.content)
      //výpočet šířky
      for (let i = 0; i < event.container.data.length; ++i) {
        event.previousContainer.data[i].flexBasis = 100 / event.container.data.length;
      }
      // console.log(event.previousContainer.data[event.previousIndex])
      event.previousContainer.data.splice(event.previousIndex, 1);


      // console.log(this.component.data.columns)
      // console.log([event.previousContainer.data[event.previousIndex]])
    }
    else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(event.previousContainer.data)
    if (event.previousContainer.data.length == 0) {

      let x = event.previousContainer.element.nativeElement.getAttribute('row')
      let y = event.previousContainer.element.nativeElement.getAttribute('mycolumn')
      // console.log(this.component.data.columns.content[x])
      // for (let i = 0; i < this.component.data.columns.content[x].length; ++i) {
      //   console.log(this.component.data.columns.content[x][i].flexBasis);
      //   // this.component.data.columns.content[x][i].flexBasis += flex;
      // }
      // console.log(event.previousContainer.element.nativeElement)
      // console.log(x, y, this.component.data.columns.content)

      this.component.columns.content[x].splice(y,1);
      // let flex = this.component.data.columns.content[x][y-1].flexBasis / this.component.data.columns.content[x].length;
      // console.log(flex)
      let flex = 100 / this.component.columns.content[x].length;
      for (let i = 0; i < this.component.columns.content[x].length; ++i) {
        // console.log(this.component.data.columns.content[x][i].flexBasis, flex)
        this.component.columns.content[x][i].flexBasis = flex;
      }
      // console.log(this.component.data.columns.content[x])
      // console.log('x')
    }
  }


  deleteContent(column: number, row: number, i:number) {
    this.component.columns.content[row][column].content.splice(i, 1);
  }

  editMenu(column:number, row:number, i:number, type: string) {
    if (this.dialog.openDialogs.length > 0)
      return;

    let dialogRef;
    switch (type) {
      case 'image':
        let tmpDialog = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editImage(this.component.columns.content[row][column].content[i])
        });
        tmpDialog.afterClosed().subscribe(result => {
          if (result !== undefined)
            this.component.columns.content[row][column].content[i].src = result;
        });
        break;
      case 'divider':
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editDivider(this.component.columns.content[row][column].content[i])
        });
        break;
      case 'grid':
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editGrid(this.component.columns.content[row][column].content[i])
        });
        break;
      default:
        alert('NENÍ IMPLEMENTOVÁNO');
    }
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        // if (result !== undefined)
        //   this.component.data.columns.content[row][column].content[i].src = result;
      });
    }

    
  }

  dragEnd(event: any, row: number) {
    for (let i = 0; i < event.sizes.length; ++i) {
      this.component.columns.content[row][i].flexBasis = event.sizes[i];
    }
  }
}
