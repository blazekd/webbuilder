import { Component, ElementRef, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'app-color-module',
  templateUrl: './color-module.component.html',
  styleUrls: ['./color-module.component.scss']
})
export class ColorModuleComponent extends AbstractDialogModule {
  title = 'Colors'


  colors = [
    {text: '#000000', background: '#ffffff'},
    {text: '#a78e01', background: '#ffffff'},
    {text: '#000000', background: '#d3d3d3'},
    {text: '#a78e01', background: '#d3d3d3'},
    {text: '#000000', background: '#808080'},
    {text: '#a78e01', background: '#808080'},
    {text: '#ffffff', background: '#3b3b3b'},
    {text: '#ffd700', background: '#3b3b3b'},
    {text: '#ffffff', background: '#000000'},
    {text: '#ffd700', background: '#000000'}
  ]


  unsetColors() {
    this.data.textColor = 'unset';
    this.data.backgroundColor = 'unset'
  }

  changeColor(colors: any) {
    this.data.textColor = colors.text;
    this.data.backgroundColor = colors.background;
  }
}