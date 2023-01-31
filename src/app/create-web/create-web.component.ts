
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import ImageDropAndPaste from 'quill-image-drop-and-paste';
import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
import { DialogData } from '../popup-dialog/dialog-settings';
import { SectionComponentClass, GridComponentClass } from './component-classes';
import { FONT_NAMES, FONT_NAMES_LOWER } from './constants';

@Component({
  selector: 'app-create-web',
  templateUrl: './create-web.component.html',
  styleUrls: ['./create-web.component.scss']
})
export class CreateWebComponent {

  
  showPc = true;


  components: SectionComponentClass[] = [
    SectionComponentClass.webnodeNav(),
    SectionComponentClass.webnode0(),
    SectionComponentClass.webnode1(),
    SectionComponentClass.webnode2(),
    SectionComponentClass.webnode3(),
    SectionComponentClass.webnode4(),
    SectionComponentClass.webnodeFooter(),
  ]

  // pageSettings: PageSettings = { title: 'Název stránky', defaultFont: 'Roboto', defaultFontWeight: '300'}
  // oldPageSettings: PageSettings = Object.assign({}, this.pageSettings);

  constructor(public dialog: MatDialog) { }



  addComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    const dialogRef = this.dialog.open(PopupDialogComponent, {data: DialogData.addSection()});

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined)
        switch (result) {
          case 'title':
            this.components.splice(i, 0, SectionComponentClass.title());
            break;
          case 'section':
            this.components.splice(i, 0, SectionComponentClass.empty());
            break;
          case 'text':
            this.components.splice(i, 0, SectionComponentClass.text());
            break;
          case 'text2':
            this.components.splice(i, 0, SectionComponentClass.text2());
            break;
          case 'cards':
            this.components.splice(i, 0, SectionComponentClass.grid());
            break;
          default:
            alert("Není implementováno!!");
            break;
        }
    });
  }


  editComp(i: number) {
    if (this.dialog.openDialogs.length > 0)
      return;

    let dataTmp = structuredClone(this.components[i])
    let dialogRef = this.dialog.open(PopupDialogComponent, {
          data: DialogData.editSection(this.components[i])
    })

    if (dialogRef === undefined)
      return;

    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined)
        this.components[i] = dataTmp;
    });
  }

  moveCompUp(index: number) {
    [this.components[index-1], this.components[index]] = [this.components[index], this.components[index-1]];
  }

  moveCompDown(index: number) {
    [this.components[index], this.components[index+1]] = [this.components[index+1], this.components[index]];
  }

  deleteComp(index: number) {
    this.components.splice(index, 1);
  }
}

