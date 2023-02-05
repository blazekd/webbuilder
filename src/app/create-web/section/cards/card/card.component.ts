import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CardClass, Cloneable, DividerClass, ImageClass, SectionComponentClass, TextClass } from '../../../component-classes';
import { PopupDialogComponent } from '../../../../popup-dialog/popup-dialog.component';
import { DialogComponentType, DialogData } from '../../../../popup-dialog/dialog-settings';

@Component({
  selector: 'app-section-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input('card') card!: CardClass;

  constructor(public dialog: MatDialog) { }


  addContent(i: number) {
    if (this.dialog.openDialogs.length > 0)
    return;

  const dialogRef = this.dialog.open(PopupDialogComponent, {data: DialogData.addComponent()});
  dialogRef.afterClosed().subscribe(result => {
    if (result !== undefined)
      switch (result) {
        case 'text':
          this.card.content.splice(i, 0, new TextClass('<p>Nový text</p>'));
          break;
        case 'header':
          this.card.content.splice(i, 0, new TextClass('<h1 style="text-align: center">Nový nadpis</h1>'));
          break;
        case 'image':
          this.card.content.splice(i, 0, new ImageClass('https://blog.inpage.cz/obrazek/3/kitten-jpg/', '300px'));
          break;
        case 'divider':
          this.card.content.splice(i, 0, DividerClass.default());
          break;
        default:
          alert("Není implementováno!!");
          break;
      }
  });

  
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

  deleteContent(i:number) {
    this.card.content.splice(i, 1);
  }

  editMenu(i:number, type: DialogComponentType) {
    if (this.dialog.openDialogs.length > 0)
      return;
    let tmpData = Cloneable.deepCopy(this.card.content[i])
    let dialogRef;
    switch (type) {
      case DialogComponentType.IMAGE:

        let tmpDialog = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editImage(this.card.content[i])
        });
        tmpDialog.afterClosed().subscribe(result => {
          if (result === undefined)
            this.card.content[i] = tmpData;
          else if (result.src == '')
            this.deleteContent(i);
        });
        break;
      case DialogComponentType.DIVIDER: 
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editDivider(this.card.content[i])
        });
        break;
      default:
        alert('NOT IMPLEMENTED');
    }
    if (dialogRef) {
      dialogRef.afterClosed().subscribe(result => {
        if (result === undefined)
          this.card.content[i] = tmpData;
      });
    }
    
  }

  drop(event: any) {
    moveItemInArray(this.card.content, event.previousIndex, event.currentIndex);

  }

  public get DialogComponentType() {
    return DialogComponentType
  }
}
