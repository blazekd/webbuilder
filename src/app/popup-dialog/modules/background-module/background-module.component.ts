import { Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-background-module',
  templateUrl: './background-module.component.html',
  styleUrls: ['./background-module.component.scss']
})
export class BackgroundModuleComponent implements OnInit {


  @Input() data: any;
  @Output() newEvent = new EventEmitter<ChangeMenuEvent>();
  backgrounds = [
    'background1', 'background2', 'background3', 'background4'
  ]  
  @ViewChildren('backgroundBinding') backgroundBinding!: QueryList<ElementRef>;


  constructor() {

   }

  ngOnInit(): void {
  }

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
