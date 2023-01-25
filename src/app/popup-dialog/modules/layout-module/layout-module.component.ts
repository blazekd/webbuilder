import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-layout-module',
  templateUrl: './layout-module.component.html',
  styleUrls: ['./layout-module.component.scss']
})
export class LayoutModuleComponent implements OnInit {


  layouts = [
    {name: 'layout1', layout: 'layout1'},
    {name: 'layout2', layout: 'layout2'}, 
    {name: 'layout3', layout: 'layout3'}, 
    {name: 'layout4', layout: 'layout1'}, 
    {name: 'layout5', layout: 'layout2'}, 
    {name: 'layout6', layout: 'layout3'}
  ]
  
  @Input() data: any;
  @Input() type: any;
  @Output() newEvent = new EventEmitter<ChangeMenuEvent>();


  ngOnInit(): void {
  }

  changeLayout(layout: any) {
    // console.log(this.data);
    this.data.layout.layout = layout.layout;
    switch (layout) {
      case this.layouts[3]:
      case this.layouts[4]:
      case this.layouts[5]:
        this.data.layout.showBackground = true;
        break;
      default:
        this.data.layout.showBackground = false;
      
    }
    // this.selection.emit(layout);
  }

}
