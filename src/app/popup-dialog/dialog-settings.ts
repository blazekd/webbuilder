import { Type } from "@angular/core";
import { ListModuleComponent } from "./modules/list-module/list-module.component";

export class DialogData {
    list: DialogModule[];
    private constructor(list: any[]) {
      this.list = list;
    }
  
    static addSection() : DialogData {
      return new DialogData(ADD_SECTION_MODULES);
    }
  
    static addComponent() : DialogData {
      return new DialogData(ADD_COMPONENT_MODULES);
    }
  }
  
  
  class DialogModule {
    constructor(public component: Type<any>, public data: any) {
  
    }
  }
  
  export const ADD_COMPONENT_MODULES = [
    new DialogModule(ListModuleComponent, [
    {type: 'button', icon: 'title', text: 'button'}, 
    {type: 'file', icon: 'title', text: 'file'}, 
    {type: 'map', icon: 'title', text: 'map'}, 
    {type: 'divider', icon: 'title', text: 'divider'}, 
    {type: 'video', icon: 'title', text: 'video'}, 
    {type: 'image', icon: 'title', text: 'image'}, 
    {type: 'header', icon: 'title', text: 'header'}, 
    {type: 'text', icon: 'title', text: 'text'}])
  ]
        
  
  export const ADD_SECTION_MODULES = [
    new DialogModule(ListModuleComponent, [
      {type: 'table', icon: 'title', text: "table"},
      {type: 'cards', icon: 'title', text: "cards"},
      {type: 'empty', icon: 'title', text: "empty"},
      {type: 'gallery', icon: 'title', text: "gallery"},
      {type: 'text2', icon: 'title', text: "text2"},
      {type: 'text', icon: 'title', text: "text"},
      {type: 'title', icon: 'title', text: "title"}]),
  ]