import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CardClass, DividerClass, ImageClass, SectionComponentClass, TextClass } from '../../../component-classes';
import { PopupDialogComponent } from '../../../../popup-dialog/popup-dialog.component';
import { DialogData } from '../../../../popup-dialog/dialog-settings';

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
  // console.log('column: ' + column + ' index: ' + i)
  dialogRef.afterClosed().subscribe(result => {
    //console.log(result);
    if (result !== undefined)
      switch (result) {
        // case 'header':
        //   // this.components.splice(i, 0, {type: 'header', data: 'Nový nadpis', background: 'pozadi1', classes: new Map().set('text-align', 'text-left').set('text-align-v', 'align-items-end').set('section-size', 'section-large').set('font', 'roboto').set('font-size', 'font-size-32').set('font-weight', 'font-weight-light'), classesString: ''});
        //   // this.components.splice(i, 0, {type: 'header', data: 'Nový nadpis', object: {}});
        //   // this.components.splice(i, 0, {type: 'header', data: HeaderComponentClass.empty()});
        //   // this.component.data.columns.content.splice(i, 0, {type: 'section', data: SectionComponentClass.empty()});
        //   alert("Není implementováno!!");
        //   break;
        // case 'image':
        //   // this.component.data.columns.content.splice(i, 0, {type: 'section', data: SectionComponentClass.empty()});
        //   alert("Není implementováno!!");
        //   break;
        // case 'review':
        //   // this.component.data.columns.content.splice(i, 0, {type: 'section', data: SectionComponentClass.empty()});
        //   alert("Není implementováno!!");
        //   break;
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
    // console.log(this.component.data.columns.content[column].content[i])
    this.card.content.splice(i, 1);
  }

  editMenu(i:number, type: string) {
    // console.log(i);
    if (this.dialog.openDialogs.length > 0)
      return;

    switch (type) {
      case 'image':
        let tmpData = structuredClone(this.card.content[i])
        let tmpDialog = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editImage(this.card.content[i])
        });
        tmpDialog.afterClosed().subscribe(result => {
          if (result === undefined)
            Object.assign(this.card.content[i], tmpData);
          else if (result.src == '')
            this.deleteContent(i);
        });
        break;
      default:
        alert('NENÍ IMPLEMENTOVÁNO');
    }

    
  }

  drop(event: any) {
    // console.log('??')
    moveItemInArray(this.card.content, event.previousIndex, event.currentIndex);

  }

  // getStyle() {
  //   return {
  //     // backgroundImage: this.card.background.background,
  //     backgroundColor: this.card.color.background,
  //     color: this.card.color.color,
  //     backgroundPosition: 'center'
  //   }
  // } 
}
