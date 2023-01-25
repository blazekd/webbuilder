import { Component, Input, OnInit, Renderer2, ElementRef, QueryList, ViewChildren, ContentChild } from '@angular/core';
import { ComponentData } from '../../create-web.component';
import { MatDialog } from '@angular/material/dialog';
import { TextClass, ImageClass, DividerClass, ColorClass, ColumnClass, EditDialog } from '../component-classes';
import { CdkDragDrop, DragRef, moveItemInArray, Point, transferArrayItem } from '@angular/cdk/drag-drop';
import { WebImageDialogComponent } from './web-image/web-image-dialog/web-image-dialog.component';
import { Subject } from 'rxjs';
import { debounceTime, distinct, distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { element } from 'protractor';
import { Console } from 'console';
import { PopupDialogComponent } from '../../../popup-dialog/popup-dialog.component';
import { DialogData } from '../../../popup-dialog/dialog-settings';


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
        dialogRef = this.dialog.open(PopupDialogComponent, {
          // data: NavComponentClass.fromComponent(this.components[i])
          data: DialogData.editDivider(this.component.data.columns.content[row][column].content[i]),
          backdropClass: 'custom-backdrop'
        });
        break;
      case 'grid':
        dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editGrid(this.component.data.columns.content[row][column].content[i])
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
}
