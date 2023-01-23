import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NavComponentClass } from '../../components/component-classes';

@Component({
  selector: 'app-edit-nav',
  templateUrl: './edit-nav.component.html',
  styleUrls: ['./edit-nav.component.scss']
})
export class EditNavComponent implements OnInit {

  menu: number = 1;
  prevLayout = Object.assign({}, this.data.layout);
  prevColor = Object.assign({}, this.data.color);
  prevSize = Object.assign({}, this.data.size);
  prevLogo = Object.assign({}, this.data.logo);
  prevBackground = Object.assign({}, this.data.background);
  // prevButton = Object.assign({}, this.data.button);


  constructor(public dialogRef: MatDialogRef<EditNavComponent>, @Inject(MAT_DIALOG_DATA) public data: NavComponentClass) {

  }

  ngOnInit(): void {
  }

  save() {
    switch (this.menu) {
      case 1:
        this.dialogRef.close(this.data);
        break;
      case 2:
        this.prevLayout = this.data.layout;
        this.menu = 1;
        break;
      case 3:
        this.prevColor = this.data.color;
        this.menu = 1;
        break;
      case 4:
        this.prevSize = this.data.size;
        this.menu = 1;
        break;
      case 5:
        this.prevLogo = this.data.logo;
        this.menu = 1;
        break;
      case 6:
        this.prevBackground = this.data.background;
        this.menu = 1;
        break;
      case 7:
        // this.prevButton = this.data.button;
        this.menu = 1;
        break;
      default:
        break;
    }
  }

  cancel() {
    switch (this.menu) {
      case 2:
        this.data.layout = this.prevLayout;
        this.menu = 1;
        break;
      case 3:
        this.data.color = this.prevColor;
        this.menu = 1;
        break;
      case 4:
        this.data.size = this.prevSize;
        this.menu = 1;
        break;
      case 5: 
        this.data.logo = this.prevLogo;
        this.menu = 1;
        break;
      case 6: 
        this.data.background = this.prevBackground;
        this.menu = 1;
        break;
      case 7: 
        // this.data.button = this.prevButton;
        this.menu = 1;
        break;
      default:
        break;
    }
  }

  changeMenu(i: number) {
    this.menu = i;
    switch (i) {
      case 2:
        this.prevLayout = Object.assign({}, this.data.layout);
        break;
      case 3:
        this.prevColor = Object.assign({}, this.data.color);
        break;
      case 4:
        this.prevSize = Object.assign({}, this.data.size);
        break;
      case 5:
        this.prevLogo = Object.assign({}, this.data.logo);
        break;
      case 6:
        this.prevBackground = Object.assign({}, this.data.background);
        break;
      case 7:
        // this.prevButton = Object.assign({}, this.data.button);
        break;
    }
  }
}

