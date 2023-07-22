import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TextClass, ImageClass, DividerClass, ColumnClass, SectionComponentClass, GridComponentClass, Cloneable } from '../component-classes';
import { moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject } from 'rxjs';
import { PopupDialogComponent } from '../../popup-dialog/popup-dialog.component';
import { DialogComponentType, DialogData } from '../../popup-dialog/dialog-settings';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  @Input() section!: SectionComponentClass;
  pointChanged: Subject<Point> = new Subject<Point>();
  test = [];
  constructor(public dialog: MatDialog) { }

  addContent(column: number, row: number, i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    const dialogRef = this.dialog.open(PopupDialogComponent, { data: DialogData.addComponent() });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        switch (result) {
          case DialogComponentType.TEXT:
            this.section.columns.content[row][column].content.splice(i, 0, TextClass.new());
            break;
          case DialogComponentType.HEADER:
            this.section.columns.content[row][column].content.splice(i, 0, TextClass.newHeader());
            break;
          case DialogComponentType.IMAGE:
            this.section.columns.content[row][column].content.splice(i, 0, ImageClass.new());
            let tmpDialog = this.dialog.open(PopupDialogComponent, {
              data: DialogData.editImage(this.section.columns.content[row][column].content[i])
            });
            tmpDialog.afterClosed().subscribe(result => {
              if (result === undefined || result.src == '')
                this.deleteContent(column, row, i);
            });
            break;
          case DialogComponentType.DIVIDER:
            this.section.columns.content[row][column].content.splice(i, 0, DividerClass.new());
            break;
          default:
            alert("Není implementováno!!");
            break;
        }
    });


  }

  getStyle() {
    return {
      backgroundImage: this.section.src == '' ? '' : 'url(' + this.section.src + ')',
      backgroundPositionX: this.section.left,
      backgroundPositionY: this.section.top,
      backgroundColor: this.section.backgroundColor,
      color: this.section.textColor,
    }
  }

  drop(event: any, row: number) {
    let col = event.container.element.nativeElement.getAttribute('column');
    if (col === 'up') {
      this.section.columns.content.splice(0, 0, [new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }
    if (col === 'down') {
      this.section.columns.content.splice(this.section.columns.content.length, 0, [new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }



    let column = parseInt(col);
    if (!isNaN(column) && event.previousContainer.element.nativeElement.getAttribute('column'))
      return;
    if (!isNaN(column) && event.previousContainer !== event.container) { // make new column
      this.section.columns.content[row].splice(column + 1, 0, new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))]));

      // calculate width
      for (let i = 0; i < event.container.data.length; ++i) {
        event.previousContainer.data[i].flexBasis = 100 / event.container.data.length;
      }

      event.previousContainer.data.splice(event.previousIndex, 1);
    }
    else if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    if (event.previousContainer.data.length == 0) {

      let x = event.previousContainer.element.nativeElement.getAttribute('row')
      let y = event.previousContainer.element.nativeElement.getAttribute('mycolumn')

      this.section.columns.content[x].splice(y, 1);

      let flex = 100 / this.section.columns.content[x].length;
      for (let i = 0; i < this.section.columns.content[x].length; ++i) {
        this.section.columns.content[x][i].flexBasis = flex;
      }
    }
  }


  deleteContent(column: number, row: number, i: number) {
    this.section.columns.content[row][column].content.splice(i, 1);
  }

  editMenu(column: number, row: number, i: number, type: DialogComponentType) {
    if (this.dialog.openDialogs.length > 0)
      return;
    let dialogRef;
    let tmpData = Cloneable.deepCopy(this.section.columns.content[row][column].content[i])

    switch (type) {
      case DialogComponentType.IMAGE:
        let tmpDialog = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editImage(this.section.columns.content[row][column].content[i])
        });
        tmpDialog.afterClosed().subscribe(result => {
          if (result === undefined)
            this.section.columns.content[row][column].content[i] = tmpData;
          else if (result.src == '')
            this.deleteContent(column, row, i);
        });
        break;
      case DialogComponentType.DIVIDER:
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editDivider(this.section.columns.content[row][column].content[i])
        });
        break;
      case DialogComponentType.CARDS:
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editGrid(this.section.columns.content[row][column].content[i])
        });
        break;
      default:
        alert('NOT IMPLEMENTED');
    }
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        if (result === undefined)
          this.section.columns.content[row][column].content[i] = tmpData;
      });
    }


  }

  dragEnd(event: any, row: number) {
    for (let i = 0; i < event.sizes.length; ++i) {
      this.section.columns.content[row][i].flexBasis = event.sizes[i];
    }
  }

  asTextClass(item: any) {
    return item as TextClass;
  }

  asImageClass(item: any) {
    return item as ImageClass;
  }

  asDividerClass(item: any) {
    return item as DividerClass;
  }

  asGridComponentClass(item: any) {
    return item as GridComponentClass;
  }

  public get DialogComponentType() {
    return DialogComponentType;
  }

}
