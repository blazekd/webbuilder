import { Component, Input, OnInit, Renderer2, ElementRef, QueryList, ViewChildren, ContentChild } from '@angular/core';
import { ComponentData } from '../../create-web.component';
import { NewSectionContentComponent } from '../../add/new-section-content/new-section-content.component';
import { MatDialog } from '@angular/material/dialog';
import { TextClass, ImageClass, DividerClass, ColorClass, ColumnClass, EditDialog } from '../component-classes';
import { CdkDragDrop, DragRef, moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { WebImageDialogComponent } from './web-image/web-image-dialog/web-image-dialog.component';
import { Subject } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { element } from 'protractor';
import { Console } from 'console';
import { EditComponent } from '../../edit/edit.component';

@Component({
  selector: 'web-section',
  templateUrl: './web-section.component.html',
  styleUrls: ['./web-section.component.scss']
})
export class WebSectionComponent implements OnInit {

  @Input() component!: ComponentData;
  pointChanged: Subject<Point> = new Subject<Point>();
  // @ViewChildren('columnWidthDropList') viewChildren!: QueryList<ElementRef>;
  test = [];
  constructor(public dialog: MatDialog, private renderer: Renderer2) { 

  }

  ngOnInit(): void {
  }

  getColumns() {
    // console.log(this.component.data.columns.content[0]);
    if (this.component == undefined)
      return [];
    
    // console.log(this.component.data.columns.columns)
    return Array(this.component.data.columns.columns).fill(1).map((x,i)=>i); // [0,1,2,3,4]
  }

  addContent(column:number,row:number, i: number) {
    if (this.dialog.openDialogs.length > 0)
    return;

  const dialogRef = this.dialog.open(NewSectionContentComponent);
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
        // case 'event':
        //   // this.component.data.columns.content.splice(i, 0, {type: 'section', data: SectionComponentClass.empty()});
        //   alert("Není implementováno!!");
        //   break;
        case 'text':
          this.component.data.columns.content[row][column].content.splice(i, 0, new TextClass('<p>Nový text</p>'));
          break;
        case 'header':
          this.component.data.columns.content[row][column].content.splice(i, 0, new TextClass('<h1 style="text-align: center">Nový nadpis</h1>'));
          break;
        case 'image':
          this.component.data.columns.content[row][column].content.splice(i, 0, new ImageClass('https://blog.inpage.cz/obrazek/3/kitten-jpg/','lel', '300px'));
          break;
        case 'divider':
          this.component.data.columns.content[row][column].content.splice(i, 0, DividerClass.default());
          break;
        default:
          alert("Není implementováno!!");
          break;
      }
  });

  
  }

  getStyle() {
    return {
      backgroundImage: this.component.data.background.background,
      backgroundColor: this.component.data.color.background,
      color: this.component.data.color.color,
      backgroundPosition: 'center'
    }
  } 

  drop(event: any, row: number) {
    // console.log(event)
    // console.log()
    // console.log(event)

    let col = event.container.element.nativeElement.getAttribute('column');
    if (col === 'up') {
      // console.log(col); // nový s flexBasis = 100;
      this.component.data.columns.content.splice(0,0,[new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      // console.log(this.component.data.columns.content)
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }
    if (col === 'down') {
      // console.log(col); // nový s flexBasis = 100;
      this.component.data.columns.content.splice(this.component.data.columns.content.length,0,[new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))])]);
      event.previousContainer.data.splice(event.previousIndex, 1);
      return;
    }



    let column = parseInt(col);
    // column = column == NaN ? undefined : column;
    // console.log(column, this.component.data.columns.content.length, typeof column)
    if (!isNaN(column) && event.previousContainer.element.nativeElement.getAttribute('column') )
      return;
    if (!isNaN(column) && event.previousContainer !== event.container) { //make new column
      this.component.data.columns.columns = this.component.data.columns.columns + 1; // přidat column
      // console.log(this.component.data.columns.content)
      this.component.data.columns.content[row].splice(column+1,0,new ColumnClass([JSON.parse(JSON.stringify(event.previousContainer.data[event.previousIndex]))]));
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

      this.component.data.columns.content[x].splice(y,1);
      // let flex = this.component.data.columns.content[x][y-1].flexBasis / this.component.data.columns.content[x].length;
      // console.log(flex)
      let flex = 100 / this.component.data.columns.content[x].length;
      for (let i = 0; i < this.component.data.columns.content[x].length; ++i) {
        // console.log(this.component.data.columns.content[x][i].flexBasis, flex)
        this.component.data.columns.content[x][i].flexBasis = flex;
      }
      // console.log(this.component.data.columns.content[x])
      // console.log('x')
    }
  }


  deleteContent(column: number, row: number, i:number) {
    // console.log(this.component.data.columns.content[column].content[i])
    this.component.data.columns.content[row][column].content.splice(i, 1);
  }

  editMenu(column:number, row:number, i:number, type: string) {
    if (this.dialog.openDialogs.length > 0)
      return;

    let dialogRef;
    switch (type) {
      case 'image':
        let xx = this.dialog.open(WebImageDialogComponent, {
          data: {
            image: this.component.data.columns.content[row][column].content[i]
          },
          backdropClass: 'custom-backdrop'
        });
        xx.afterClosed().subscribe(result => {
          //console.log(result);
          if (result !== undefined)
            this.component.data.columns.content[row][column].content[i].src = result;
        });
        break;
      case 'divider':
        dialogRef = this.dialog.open(EditComponent, {
          // data: NavComponentClass.fromComponent(this.components[i])
          data: EditDialog.dividerDialog(this.component.data.columns.content[row][column].content[i]),
          backdropClass: 'custom-backdrop'
        });
        break;
      case 'grid':
        dialogRef = this.dialog.open(EditComponent, {
          data: EditDialog.gridDialog(this.component.data.columns.content[row][column].content[i])
        });
        break;
      case 'calendar':
        dialogRef = this.dialog.open(EditComponent, {
          data: EditDialog.calendarDialog(this.component.data.columns.content[row][column].content[i])
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
    // console.log(event)
    for (let i = 0; i < event.sizes.length; ++i) {
      this.component.data.columns.content[row][i].flexBasis = event.sizes[i];
    }
    // console.log(this.component.data.columns)
  }

  // borderConstraint(point: Point, dragRef: DragRef) {

  //   let leftColumn = document.getElementsByClassName('cdk-drag-placeholder')[0].parentElement!.parentElement!;
  //   let rightColumn = leftColumn.nextElementSibling! as HTMLElement;
  //   console.log(leftColumn, rightColumn)
  //   // let leftColumn = (event.source.element.nativeElement as HTMLElement).parentElement!.parentElement!;
  //   // let leftWidth = parseInt(getComputedStyle(leftColumn).width)
  //   // let rightColumn = leftColumn.nextElementSibling! as HTMLElement;
  //   // let rightWidth = parseInt(getComputedStyle(rightColumn).width)
  //   // let totalWidth = leftWidth + rightWidth; //100%
  //   var rectLeft = leftColumn.getBoundingClientRect();
  //   var rectRight = rightColumn.getBoundingClientRect();
  // // console.log(rectLeft.left, rectRight.right);
  //   // console.log(getComputedStyle(leftColumn), getComputedStyle(rightColumn))
  //   // console.log(totalWidth, leftWidth, rightWidth,(dragRef.getFreeDragPosition()))
  //   if (point.x >= rectRight.right - 100) {
  //     point.x = rectRight.right - 100;
  //   }
  //   if (point.x <= rectLeft.left + 100) {
  //     point.x = rectLeft.left + 100
  //   }
      
  //   // console.log(point, dragRef)
  //   return point;
  // }

  // moved(event: any) {
  //   //throttle
  //   // if (this.pointChanged.observers.length === 0) {
  //   //   this.pointChanged
  //   //     .pipe(throttleTime(20))
  //   //     .subscribe(x => {
  //   //       this.calculateColumnWidth(x);
  //   //     });
  //   // }
  //   // this.pointChanged.next(event);
  //   this.calculateColumnWidth(event)
  // }

  
  // calculateColumnWidth(event: any) {
  //   // console.log(event.distance)
  //   // console.log(event.source.element.nativeElement.offsetParent)
  //   //current column
  //   //next column
  //   //dohromady width = x%
  //   //poměr mezi current a next
  //   //nový poměr mezi current a next
  //   // console.log((this.renderer.selectRootElement('#columnId-'+column) as ElementRef))
  //   // let leftColumn = document.getElementsByClassName('cdk-drag-placeholder')[0].parentElement!.parentElement!;
  //   // let rightColumn = leftColumn.nextElementSibling! as HTMLElement;
  //   // console.log(getComputedStyle(leftColumn).flexBasis)
  //   // console.log(getComputedStyle(rightColumn).flexBasis)
  //   // let leftWidth = parseInt(getComputedStyle(leftColumn).width) //INITIAL WIDTH
  //   // let rightWidth = parseInt(getComputedStyle(rightColumn).width) //INITIAL WIDTH
  //   let totalWidth = this.leftWidth + this.rightWidth; //100%

  //   // let leftBasis = parseInt(getComputedStyle(leftColumn).flexBasis)
  //   // let rightBasis = parseInt(getComputedStyle(rightColumn).flexBasis);
  //   // let leftBasis = parseInt(this.component.data.columns.content[0].flexBasis)
  //   // let rightBasis = parseInt(this.component.data.columns.content[1].flexBasis);
  //   // let totalBasis = leftBasis + rightBasis //
  //   // let basisRatio = leftBasis / rightBasis;
  //   // console.log(leftBasis, rightBasis)
  //   let newLeftWidth = this.leftWidth + event.distance.x;
  //   // let newRightWidth = this.rightWidth - event.distance.x;
  //   // console.log('totalnewwidth', newLeftWidth + newRightWidth)
  //   let newLeftBasis = this.totalBasis * newLeftWidth / totalWidth;
  //   let newRigthBasis = this.totalBasis - newLeftBasis

  //   // console.log(newLeftWidth / totalWidth, newRightWidth / totalWidth)
  //   if (newLeftWidth >= totalWidth - 100 || newLeftWidth <= 100)
  //     return;



  //   // leftColumn.style.flexBasis = this.component.data.columns.content[0].flexBasis = '15%';
  //   // rightColumn.style.flexBasis = this.component.data.columns.content[1].flexBasis = '25%';
  //   this.component.data.columns.content[this.widthColumn].flexBasis = newLeftBasis + '%';
  //   this.component.data.columns.content[this.widthColumn+1].flexBasis = newRigthBasis + '%';
  //   // console.log(newLeftBasis, newRigthBasis)
  // }

  // leftWidth = 0;
  // rightWidth = 0;
  // totalBasis = 0;
  // widthColumn = 1;

  // started(column: number) {
  //   // console.log(event)
  //   this.widthColumn = column;
  //   let leftColumn = document.getElementsByClassName('cdk-drag-placeholder')[0].parentElement!.parentElement!;
  //   let rightColumn = leftColumn.nextElementSibling! as HTMLElement;
  //   // let leftColumn = (event.source.element.nativeElement as HTMLElement).parentElement!.parentElement!;
  //   this.leftWidth = parseInt(getComputedStyle(leftColumn).width)
  //   // let rightColumn = leftColumn.nextElementSibling! as HTMLElement;
  //   this.rightWidth = parseInt(getComputedStyle(rightColumn).width)
  //   this.totalBasis = parseFloat(this.component.data.columns.content[this.widthColumn].flexBasis) + parseFloat(this.component.data.columns.content[this.widthColumn+1].flexBasis);
  //   // console.log(this.totalBasis);

  //   // console.log(leftColumn, rightColumn)
  // }
}
