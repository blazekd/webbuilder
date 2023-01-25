import { Component, OnInit, Input, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-alignment-module',
  templateUrl: './alignment-module.component.html',
  styleUrls: ['./alignment-module.component.scss']
})
export class AlignmentModuleComponent extends AbstractDialogModule {

  title = 'Alignment'
  getAlignment() {
    let i = 0;
    if(this.data.alignment.align == 'center') {
      i = 3;
    }
    else if (this.data.alignment.align == 'flex-end') {
      i = 6;
    }

    switch (this.data.alignment.justify) {
      case 'flex-start':
        return i + 1;
      case 'center':
        return i + 2;
      case 'flex-end':
        return i + 3;
    }
    return 0;
  }

  changeAlignment(i: number) {
    switch(i) {
      case 1:
        this.data.alignment.align = 'flex-start';
        this.data.alignment.justify = 'flex-start';
        break;
      case 2:
        this.data.alignment.align = 'flex-start';
        this.data.alignment.justify = 'center';
        break;
      case 3:
        this.data.alignment.align = 'flex-start';
        this.data.alignment.justify = 'flex-end';
        break;
      case 4:
        this.data.alignment.align = 'center';
        this.data.alignment.justify = 'flex-start';
        break;
      case 5:
        this.data.alignment.align = 'center';
        this.data.alignment.justify = 'center';
        break;
      case 6:
        this.data.alignment.align = 'center';
        this.data.alignment.justify = 'flex-end';
        break;
      case 7:
        this.data.alignment.align = 'flex-end';
        this.data.alignment.justify = 'flex-start';
        break;
      case 8:
        this.data.alignment.align = 'flex-end';
        this.data.alignment.justify = 'center';
        break;
      case 9:
        this.data.alignment.align = 'flex-end';
        this.data.alignment.justify = 'flex-end';
        break;
      default:
        break;                           
    }
  }

}

