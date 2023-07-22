import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'sortablejs';
import { DialogData } from 'src/app/popup-dialog/dialog-settings';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';
import { CardClass, Cloneable, GridComponentClass } from '../../component-classes';

@Component({
  selector: 'app-section-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  sortableOptions: Options = {
    scroll: true,
    scrollSensitivity: 100,
    handle: '.card-handle',
    fallbackOnBody: true,
    delay: 50,
    animation: 150,
    forceFallback: true,
    dragClass: 'dragclass',
    direction: 'horizontal',
    chosenClass: 'sortable-chosen'

  };

  @Input() content!: GridComponentClass;

  constructor(public dialog: MatDialog) {


  }



  getCardStyle(i: number) {
    return {
      backgroundColor: this.content.cards[i].backgroundColor,
      color: this.content.cards[i].textColor,
      flexBasis: 100 / this.content.columns + '%',
      backgroundImage: this.content.cards[i].src == '' ? '' : 'url(' + this.content.cards[i].src + ')',
      backgroundPositionX: this.content.cards[i].left,
      backgroundPositionY: this.content.cards[i].top,
      backgroundSize: 'cover'

    }
  }


  addContent(i: number) {
    this.content.cards.splice(i, 0, Cloneable.deepCopy(this.content.template));
    this.initTable()
  }


  deleteContent(i: number) {
    this.content.cards.splice(i, 1);
  }

  editMenu(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;


    const dialogRef = this.dialog.open(PopupDialogComponent, {
      data: DialogData.editCard(this.content.cards[i])
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        this.content.cards[i] = result;
    });

  }

  duplicate(i: number) {
    this.content.cards.splice(i, 0, Cloneable.deepCopy(this.content.cards[i]));
  }

  initTable() {
    // create table rows based on input list
    // example: [1,2,3,4,5,6] => [ [1,2,3], [4,5,6] ]
    this.itemsTable = this.content.cards
      .filter((_: any, outerIndex: any) => outerIndex % this.content.columns == 0) // create outter list of rows
      .map((
        _: any,
        rowIndex: any // fill each row from...
      ) =>
        this.content.cards.slice(
          rowIndex * this.content.columns, // ... row start and
          rowIndex * this.content.columns + this.content.columns // ...row end
        )
      );
  }

  itemsTable!: Array<CardClass[]>;
  getItemsTable(): CardClass[][] {
    // view has been resized? => update table with new column size
    if (!this.itemsTable) {
      this.initTable();
    }
    return this.itemsTable;
  }

  reorderDroppedItem(event: CdkDragDrop<CardClass[]>) {
    // same row/container? => move item in same row
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // different rows? => transfer item from one to another list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    // update items after drop: flatten matrix into list
    // example: [ [1,2,3], [4,5,6] ] => [1,2,3,4,5,6]
    this.content.cards = this.itemsTable.reduce(
      (previous, current) => previous.concat(current),
      []
    );

    // re-initialize table - makes sure each row has same numbers of entries
    // example: [ [1,2], [3,4,5,6] ] => [ [1,2,3], [4,5,6] ]
    this.initTable();
  }




  list = Array(25)
    .fill('')
    .map((_, i) => i + 1);

  drop(event: CdkDragDrop<number>): void {
    moveItemInArray(
      this.list,
      event.previousContainer.data,
      event.container.data
    );
  }

  drop2(event: CdkDragDrop<any>): void {
    moveItemInArray(
      this.content.cards,
      event.previousContainer.data,
      event.container.data
    );
  }




}