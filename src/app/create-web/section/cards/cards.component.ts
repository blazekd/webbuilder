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

  @Input() component!: GridComponentClass;

    constructor(public dialog: MatDialog) {


  }



  getCardStyle(i: number) {
    return {
      backgroundColor: this.component.cards[i].backgroundColor,
      color: this.component.cards[i].textColor,
      flexBasis: 100/this.component.columns + '%',
      backgroundImage: this.component.cards[i].src == '' ? '' : 'url(' + this.component.cards[i].src + ')',
      backgroundPositionX: this.component.cards[i].left,
      backgroundPositionY: this.component.cards[i].top,
      backgroundSize: 'cover'

    }
  } 


  addContent(i:number) {
    this.component.cards.splice(i, 0, Cloneable.deepCopy(this.component.template));  
    this.initTable()
  }


  deleteContent(i:number) {
    this.component.cards.splice(i, 1);
  }

  editMenu(i:number) {
    if (this.dialog.openDialogs.length > 0)
      return;


    const dialogRef = this.dialog.open(PopupDialogComponent, {
      data: DialogData.editCard(this.component.cards[i])
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        this.component.cards[i] = result;
    });
    
  }

  duplicate(i: number) {
    this.component.cards.splice(i, 0, Cloneable.deepCopy(this.component.cards[i])); 
  }

  initTable() {
    // create table rows based on input list
    // example: [1,2,3,4,5,6] => [ [1,2,3], [4,5,6] ]
    this.itemsTable = this.component.cards
      .filter((_:any, outerIndex:any) => outerIndex % this.component.columns == 0) // create outter list of rows
      .map((
        _:any,
        rowIndex:any // fill each row from...
      ) =>
        this.component.cards.slice(
          rowIndex * this.component.columns, // ... row start and
          rowIndex * this.component.columns + this.component.columns // ...row end
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
    this.component.cards = this.itemsTable.reduce(
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
    this.component.cards,
    event.previousContainer.data,
    event.container.data
  );
}




}