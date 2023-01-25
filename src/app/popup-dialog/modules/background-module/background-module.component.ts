import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-background-module',
  templateUrl: './background-module.component.html',
  styleUrls: ['./background-module.component.scss']
})
export class BackgroundModuleComponent extends AbstractDialogModule {

  title = 'Background'

  backgrounds = [
    'background1', 'background2', 'background3', 'background4'
  ]  
  @ViewChildren('backgroundBinding') backgroundBinding!: QueryList<ElementRef>;



  changeBackground(bg: string) {
    // console.log(bg);
    this.data.background.name = bg;
    this.setBackground();
    //this.change.emit(this.data)
  }

  setBackground() {
    const style = getComputedStyle(this.backgroundBinding.toArray().filter((x) => x.nativeElement.id == this.data.background.name)[0].nativeElement);
    // console.log(style.backgroundImage);
    this.data.background.background = style.backgroundImage;
  }

}
