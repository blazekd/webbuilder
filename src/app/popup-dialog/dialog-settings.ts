import { Type } from "@angular/core";
import { BackgroundModuleComponent } from "./modules/background-module/background-module.component";
import { ColorModuleComponent } from "./modules/color-module/color-module.component";
import { ColumnsModuleComponent } from "./modules/columns-module/columns-module.component";
import { DividerColorModuleComponent } from "./modules/divider-color-module/divider-color-module.component";
import { DividerSizeModuleComponent } from "./modules/divider-size-module/divider-size-module.component";
import { DividerStyleModuleComponent } from "./modules/divider-style-module/divider-style-module.component";
import { ImageModuleComponent } from "./modules/image-module/image-module.component";
import { LayoutModuleComponent } from "./modules/layout-module/layout-module.component";
import { EventMessage, ListModuleComponent } from "./modules/list-module/list-module.component";
import { LogoModuleComponent } from "./modules/logo-module/logo-module.component";
import { SizeModuleComponent } from "./modules/size-module/size-module.component";

export class DialogData {
    list: DialogModule[];
    message: EventMessage;
    data: any;
    private constructor(list: any[], message: EventMessage, data?: any,) {
      this.list = list;
      this.data = data;
      this.message = message;
    }
  
    static addSection() : DialogData {
      return new DialogData(ADD_SECTION_MODULES, EventMessage.ADD);
    }
  
    static addComponent() : DialogData {
      return new DialogData(ADD_COMPONENT_MODULES, EventMessage.ADD);
    }

    static editNav(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_NAV_MODULES), EventMessage.CHANGE, data);
    }

    static editSection(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_SECTION_MODULES), EventMessage.CHANGE, data);
    }

    static editFooter(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_FOOTER_MODULES), EventMessage.CHANGE, data);
    }

    static editGrid(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_GRID_MODULES), EventMessage.CHANGE, data);
    }

    static editDivider(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_DIVIDER_MODULES), EventMessage.CHANGE, data);
    }

    static editCard(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_CARD_MODULES), EventMessage.CHANGE, data);
    }

    static editImage(data: any) : DialogData {
      return new DialogData(EDIT_IMAGE_MODULES, EventMessage.CHANGE, data);
    }

    private static getModulesWithMenu(modules: DialogModule[]) : DialogModule[] {
      let result = [];
      for (let item of modules) {
        result.push(item.moduleData);
      }
      return [new DialogModule(ListModuleComponent, result), ...modules];
    }
  }
  
  
  class DialogModule {
    constructor(public component: Type<any>, public moduleData: any) {
  
    }
  }
  
  export const ADD_COMPONENT_MODULES = [
    new DialogModule(ListModuleComponent, [
    {type: 'button', icon: 'title', text: 'button!!'}, 
    {type: 'file', icon: 'title', text: 'file!!'}, 
    {type: 'map', icon: 'title', text: 'map!!'}, 
    {type: 'divider', icon: 'title', text: 'divider'}, 
    {type: 'video', icon: 'title', text: 'video!!'}, 
    {type: 'image', icon: 'title', text: 'image'}, 
    {type: 'header', icon: 'title', text: 'header'}, 
    {type: 'text', icon: 'title', text: 'text'}])
  ]
        
  
  export const ADD_SECTION_MODULES = [
    new DialogModule(ListModuleComponent, [
      {type: 'table', icon: 'title', text: "table!!"},
      {type: 'cards', icon: 'title', text: "cards"},
      {type: 'empty', icon: 'title', text: "empty!!"},
      {type: 'gallery', icon: 'title', text: "gallery!!"},
      {type: 'text2', icon: 'title', text: "text2"},
      {type: 'text', icon: 'title', text: "text"},
      {type: 'title', icon: 'title', text: "title"}]),
  ]



  //todo enum for type
export const EDIT_NAV_MODULES = [
  new DialogModule(LayoutModuleComponent, {type: 'layout', icon: 'view_compact', text: "Layout!!!"}), 
  new DialogModule(ColorModuleComponent, {type: 'colors', icon: 'palette', text: "Colors"}),
  new DialogModule(SizeModuleComponent, {type: 'size', icon: 'expand', text: "Dimensions!!(HEIGHT)"}),
  new DialogModule(LogoModuleComponent, {type: 'title', icon: 'title', text: "Logo and title!!!"}),
  new DialogModule(BackgroundModuleComponent, {type: 'background', icon: 'image', text: "Background!!!"})
]

export const EDIT_SECTION_MODULES = [
  new DialogModule(ColumnsModuleComponent, {type: 'columns', icon: 'view_compact', text: "Columns!!!"}),
  new DialogModule(ColorModuleComponent, {type: 'colors', icon: 'palette', text: "Colors"}),
  new DialogModule(SizeModuleComponent, {type: 'dimensions', icon: 'expand', text: "Dimensions"}),
  new DialogModule(BackgroundModuleComponent, {type: 'background', icon: 'image', text: "Background"})
]

export const EDIT_FOOTER_MODULES = [
  new DialogModule(ColorModuleComponent, {type: 'colors', icon: 'palette', text: "Colors"}),
  new DialogModule(BackgroundModuleComponent, {type: 'background', icon: 'image', text: "Background!!!"})
]

export const EDIT_GRID_MODULES = [
  new DialogModule(ColumnsModuleComponent, {type: 'columns', icon: 'view_compact', text: "Columns!!!"}),
]

export const EDIT_CARD_MODULES = [
  new DialogModule(ColorModuleComponent, {type: 'colors', icon: 'palette', text: "Colors"}),
  new DialogModule(BackgroundModuleComponent, {type: 'background', icon: 'image', text: "Background"})
]

export const EDIT_DIVIDER_MODULES = [
  new DialogModule(DividerStyleModuleComponent, {type: 'linestyle', icon: 'horizontal_split', text: "Line style!!!"}),
  new DialogModule(DividerColorModuleComponent, {type: 'colors', icon: 'palette', text: "Colors!!!"}),
  new DialogModule(DividerSizeModuleComponent, {type: 'dimensions', icon: 'expand', text: "Dimensions!!!"})
]

export const EDIT_IMAGE_MODULES = [
  new DialogModule(ImageModuleComponent, {})
]
