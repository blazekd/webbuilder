import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Options } from 'sortablejs';
import { DialogData } from 'src/app/popup-dialog/dialog-settings';
import { PopupDialogComponent } from 'src/app/popup-dialog/popup-dialog.component';
import { CardClass, GridComponentClass } from '../../component-classes';

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
    // fallbackClass: 'dragclass',
    dragClass: 'dragclass',
    direction: 'horizontal',
    chosenClass: 'sortable-chosen'

  };

  @Input() component!: GridComponentClass;
  // constructor(public dialog: MatDialog,private viewportRuler: ViewportRuler) { 

  //       this.target = null;
  //   this.source = null;
  // }

    constructor(public dialog: MatDialog) {


  }


  // getStyle() {
  //   return {
  //     backgroundImage: this.component.background.background,
  //     backgroundColor: this.component.color.background,
  //     color: this.component.color.color,
  //     backgroundPosition: 'center'
  //   }
  // } 

  getCardStyle(i: number) {
    return {
      // alignItems: this.component.data.cards[i].alignment.align,
      backgroundColor: this.component.cards[i].color.background,
      color: this.component.cards[i].color.color,
      flexBasis: 100/this.component.columns.columns + '%',
      backgroundImage: this.component.cards[i].background.background,
      backgroundPosition: 'center',
      backgroundSize: 'cover'

    }
  } 

  // getFlexBasis() {
  //   return {
  //     flexBasis: 100/this.component.data.columns.columns + '%',
  //   }
  // } 

  addContent(i:number) {
    this.component.cards.splice(i, 0, JSON.parse(JSON.stringify(this.component.template)));  
    this.initTable()
  }


  deleteContent(i:number) {
    // console.log(this.component.data.columns.columns.content[column].content[i])
    this.component.cards.splice(i, 1);
  }

  editMenu(i:number) {
    console.log(i);
    if (this.dialog.openDialogs.length > 0)
      return;

    // const dialogRef = this.dialog.open(WebCardDialogComponent, {
    //   data: {
    //     card: this.component.data.cards[i]
    //   },
    //   backdropClass: 'custom-backdrop'
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   //console.log(result);
    //   if (result !== undefined)
    //     this.component.data.cards[i] = result;
    // });

    const dialogRef = this.dialog.open(PopupDialogComponent, {
      // data: NavComponentClass.fromComponent(this.components[i])
      data: DialogData.editCard(this.component.cards[i])
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result !== undefined)
        this.component.cards[i] = result;
    });

    // switch (type) {
    //   case 'image':
    //     const dialogRef = this.dialog.open(WebImageDialogComponent, {
    //       data: {
    //         image: this.component.data.cards[i]
    //       },
    //       backdropClass: 'custom-backdrop'
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       //console.log(result);
    //       if (result !== undefined)
    //         this.component.data.cards[i].src = result;
    //     });
    //     break;
    //   default:
    //     alert('NENÍ IMPLEMENTOVÁNO');
    // }

    
  }

  duplicate(i: number) {
    this.component.cards.splice(i, 0, JSON.parse(JSON.stringify(this.component.cards[i]))); 
  }

  // drop(event: any) {
  //   // console.log(event.previousIndex, event.currentIndex)
  //   // moveItemInArray(this.component.data.cards, event.previousIndex, event.currentIndex);
  //   moveItemInArray(this.component.data.cards, event.item.data, event.container.data);
  // }


  initTable() {
    // create table rows based on input list
    // example: [1,2,3,4,5,6] => [ [1,2,3], [4,5,6] ]
    this.itemsTable = this.component.cards
      .filter((_:any, outerIndex:any) => outerIndex % this.component.columns.columns == 0) // create outter list of rows
      .map((
        _:any,
        rowIndex:any // fill each row from...
      ) =>
        this.component.cards.slice(
          rowIndex * this.component.columns.columns, // ... row start and
          rowIndex * this.component.columns.columns + this.component.columns.columns // ...row end
        )
      );
  }

  itemsTable!: Array<CardClass[]>;
  getItemsTable(): CardClass[][] {
    // view has been resized? => update table with new column size
    // console.log(this.itemsTable)
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
//   @ViewChild(CdkDropListGroup) listGroup!: CdkDropListGroup<CdkDropList>;
//   @ViewChild(CdkDropList) placeholder!: CdkDropList;

//   public items: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//   public target: any;
//   public targetIndex!: number;
//   public source: any;
//   public sourceIndex!: number;
//   public dragIndex!: number;
//   public activeContainer!: any;


//   ngAfterViewInit() {
//     let phElement = this.placeholder.element.nativeElement;

//     phElement.style.display = 'none';
//     phElement.parentElement!.removeChild(phElement);
//   }

//   dragMoved(e: CdkDragMove) { //YUP
//     // console.log('moved')
//     let point = this.getPointerPositionOnPage(e.event);

//     this.listGroup._items.forEach(dropList => {
//       if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
//         this.activeContainer = dropList;
//         return;
//       }
//     });
//   }

//   dropListDropped(event: any) {
//     console.log(event)
//     this.target = event.container;
//     this.source = event.previousContainer;
//     this.targetIndex = event.currentIndex;
//     this.sourceIndex = event.previousIndex;
//     if (!this.target)
//       return;



//     let phElement = this.placeholder.element.nativeElement;



//     // console.log(phElement)


//     let parent = phElement.parentElement!;

//     phElement.style.display = 'none';
//     //NEFUNGUJE PROTOŽE TAM NENÍ PLACEHOLDER
//     parent.removeChild(phElement);
//     parent.appendChild(phElement);
//     parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);

//     this.target = null;
//     this.source = null;

//     // if (this.sourceIndex != this.targetIndex)
//     //   moveItemInArray(this.component.data.cards, this.sourceIndex, this.targetIndex);
//     if (this.sourceIndex != this.targetIndex) {
//       moveItemInArray(this.items, this.sourceIndex, this.targetIndex);
//       // console.log('mmoevmoemo')
//     }

//   }

//   dropListEnterPredicate = (drag: CdkDrag, drop: CdkDropList) => {
//     // console.log(drop)
//     if (drop == this.placeholder)
//       return true;

//     if (drop != this.activeContainer)
//       return false;
//       console.log('predicate')


//     let phElement = this.placeholder.element.nativeElement;
//     let sourceElement = drag.dropContainer.element.nativeElement;
//     let dropElement = drop.element.nativeElement;

//  // NUP

//     let dragIndex = __indexOf(dropElement.parentElement!.children, (this.source ? phElement : sourceElement));
//     let dropIndex = __indexOf(dropElement.parentElement!.children, dropElement);
//     console.log(dragIndex, dropIndex)
//     if (!this.source) {
//       this.sourceIndex = dragIndex;
//       this.source = drag.dropContainer;

//       phElement.style.width = sourceElement.clientWidth + 'px';
//       phElement.style.height = sourceElement.clientHeight + 'px';
      
//       sourceElement.parentElement!.removeChild(sourceElement);
//     }

//     this.targetIndex = dropIndex;
//     this.target = drop;

//     phElement.style.display = '';
//     dropElement.parentElement!.insertBefore(phElement, (dropIndex > dragIndex 
//       ? dropElement.nextSibling : dropElement));


//       // console.log(drag)
//     // this.placeholder._dropListRef.enter(drag._dragRef, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
//     return false;
//   }
  
//   /** Determines the point of the page that was touched by the user. */
//   getPointerPositionOnPage(event: MouseEvent | TouchEvent) { //YUP
//     // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
//     const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
//         const scrollPosition = this.viewportRuler.getViewportScrollPosition();
//         return {
//             x: point.pageX - scrollPosition.left,
//             y: point.pageY - scrollPosition.top
//         };
//     }
// }

// function __indexOf(collection: any, node:any) { //YUP
//   // console.log(Array.prototype.indexOf.call(collection, node))
//   return Array.prototype.indexOf.call(collection, node);
// };

// /** Determines whether an event is a touch event. */
// function __isTouchEvent(event: MouseEvent | TouchEvent): event is TouchEvent { //YUP
//   // console.log(event.type.startsWith('touch'))
//   return event.type.startsWith('touch');
// }

// function __isInsideDropListClientRect(dropList: CdkDropList, x: number, y: number) { //ASI YUP
//   const {top, bottom, left, right} = dropList.element.nativeElement.getBoundingClientRect();
//   // console.log(y >= top && y <= bottom && x >= left && x <= right)
//   return y >= top && y <= bottom && x >= left && x <= right; 
// }