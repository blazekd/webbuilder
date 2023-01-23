import { Component, Input, OnInit } from '@angular/core';
import { ComponentData } from '../../create-web.component';
import { NavComponentClass } from '../component-classes';
import {  FONT_NAMES } from '../constants';


@Component({
  selector: 'web-nav',
  templateUrl: './web-nav.component.html',
  styleUrls: ['./web-nav.component.scss']
})
export class WebNavComponent implements OnInit {

  @Input() component!: ComponentData;
  // fontSizes = FONT_SIZES;
  FONT_NAMES = FONT_NAMES;

  modulesHeader = {
    toolbar: [
      ['bold', 'italic'],        // toggled buttons
      // ['blockquote', 'code-block'],
    
      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      // [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
    
      // [{ 'size': FONT_SIZES }],  // custom dropdown
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': FONT_NAMES }],
    
      // ['clean']                                         // remove formatting button
    ],
    imageDropAndPaste: {
      handler: () => {return false}
    },
  };


  constructor() { }

  ngOnInit(): void {
  }

  getStyle() {
    return {
      backgroundImage: this.component.data.background.background,
      backgroundColor: this.component.data.color.background,
      color: this.component.data.color.color,

    }
  }

  getStyle2() {
    return {
      // backgroundImage: this.component.data.background.background,
      backgroundColor: this.component.data.color.background,
      color: this.component.data.color.color,

    }
  }

  getTitleBackground() {
    return this.component.data.logo.haveTitleHighlight ? this.component.data.logo.titleHighlight + Math.round(this.component.data.logo.titleHighlightOpacity * 255).toString(16).padStart(2, '0') : 'none';
  }

  getLogoBackground() {
    return this.component.data.logo.haveLogoHighlight ? this.component.data.logo.logoHighlight + Math.round(this.component.data.logo.logoHighlightOpacity * 255).toString(16).padStart(2, '0') : 'none';
  }

  getBackground() {
    // console.log(Math.round(this.component.data.button.opacity * 255))
    // console.log(this.component.data.button.customBackground +  Math.round(this.component.data.button.opacity * 255).toString(16).padStart(2, '0'))
    switch (this.component.data.button.style) {
      case 'button2':
      case 'button4':
        return this.component.data.button.customBackground +  Math.round(this.component.data.button.opacity * 255).toString(16).padStart(2, '0');
      default:
        return 'none';
    }
  }
  getColor() {
    switch (this.component.data.button.style) {
      case 'button2':
      case 'button4':
        return this.component.data.button.customColor;
      default:
        return this.component.data.color.color;
    }
  }

}
