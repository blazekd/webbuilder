import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-layout-module',
  templateUrl: './layout-module.component.html',
  styleUrls: ['./layout-module.component.scss']
})
export class LayoutModuleComponent extends AbstractDialogModule {

  title = 'Layout'
  layouts = [
    {name: 'layout1', layout: 'layout1'},
    {name: 'layout2', layout: 'layout2'}, 
    {name: 'layout3', layout: 'layout3'}, 
    {name: 'layout4', layout: 'layout1'}, 
    {name: 'layout5', layout: 'layout2'}, 
    {name: 'layout6', layout: 'layout3'}
  ]



  changeLayout(layout: any) {
    // console.log(this.data);
    this.data.layout = layout.layout;
    switch (layout) {
      case this.layouts[3]:
      case this.layouts[4]:
      case this.layouts[5]:
        this.data.showBackground = true;
        break;
      default:
        this.data.showBackground = false;
      
    }
    // this.selection.emit(layout);
  }

}
