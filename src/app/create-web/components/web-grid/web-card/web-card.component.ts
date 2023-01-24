import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewSectionContentComponent } from 'src/app/create-web/add/new-section-content/new-section-content.component';
import { CardClass, DividerClass, ImageClass, TextClass } from '../../component-classes';
import { WebImageDialogComponent } from '../../web-section/web-image/web-image-dialog/web-image-dialog.component';

@Component({
  selector: 'web-grid-card',
  templateUrl: './web-card.component.html',
  styleUrls: ['./web-card.component.scss']
})
export class WebCardComponent implements OnInit {

  @Input('card') card!: CardClass;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addContent(i: number) {
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
        case 'text':
          this.card.content.splice(i, 0, new TextClass('<p>Nový text</p>'));
          break;
        case 'header':
          this.card.content.splice(i, 0, new TextClass('<h1 style="text-align: center">Nový nadpis</h1>'));
          break;
        case 'image':
          this.card.content.splice(i, 0, new ImageClass('https://blog.inpage.cz/obrazek/3/kitten-jpg/','lel', '300px'));
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
        const dialogRef = this.dialog.open(WebImageDialogComponent, {
          data: {
            image: this.card.content[i]
          },
          backdropClass: 'custom-backdrop'
        });
        dialogRef.afterClosed().subscribe(result => {
          //console.log(result);
          if (result !== undefined)
            this.card.content[i].src = result;
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
