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
  @ViewChildren('colorBinding') colorBinding!: QueryList<ElementRef>;
  colors = [
    'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'
  ]


  unsetColors() {
    this.data.color.name = 'nocolors';
    this.data.color.color = 'unset';
    this.data.color.background = 'unset'
  }

  changeBackgroundColor(color: string) {
    this.data.color.background = color;
    this.data.color.customBackground = color;
  }

  changeTextColor(color: string) {
    this.data.color.color = color;
    this.data.color.customColor = color;
  }

  changeColor(color: string) {
    // console.log(this.currentColor);
    // this.currentColor = color;
    this.data.color.name = color;
    this.setColor();
    // this.change.emit(this.data)
    // console.log(color);
  }

  setColor() {
    const style = getComputedStyle(this.colorBinding.toArray().filter((x) => x.nativeElement.id == this.data.color.name)[0].nativeElement);
    // console.log(style.color);
    // console.log(style.backgroundColor);
    // this.color = new ColorClass(style.color, style.backgroundColor, this.color.name);
    this.data.color.color = style.color;
    this.data.color.background = style.backgroundColor;
  }
}
