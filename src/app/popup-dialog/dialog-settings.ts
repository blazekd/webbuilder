import { Type } from "@angular/core";
import { EventMessage } from "./classes/EventMessageEnum";
import { ColorModuleComponent } from "./modules/color-module/color-module.component";
import { ColumnsModuleComponent } from "./modules/columns-module/columns-module.component";
import { DividerColorModuleComponent } from "./modules/divider-color-module/divider-color-module.component";
import { DividerSizeModuleComponent } from "./modules/divider-size-module/divider-size-module.component";
import { ImageModuleComponent } from "./modules/image-module/image-module.component";
import { ListModuleComponent } from "./modules/list-module/list-module.component";
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


    static editSection(data: any) : DialogData {
      return new DialogData(DialogData.getModulesWithMenu(EDIT_SECTION_MODULES), EventMessage.CHANGE, data);
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

  export enum DialogComponentType {
    HEADER, TEXT, IMAGE, DIVIDER, TITLE, TEXT2, CARDS, EMPTY
  }
  
  export const ADD_COMPONENT_MODULES = [
    new DialogModule(ListModuleComponent, [
    {type: DialogComponentType.HEADER, icon: 'abc', text: 'header'}, 
    {type: DialogComponentType.TEXT, icon: 'notes', text: 'text'},
    {type: DialogComponentType.IMAGE, icon: 'image', text: 'image'}, 
    {type: DialogComponentType.DIVIDER, icon: 'horizontal_rule', text: 'divider'}
    ])]
        
  
  export const ADD_SECTION_MODULES = [
    new DialogModule(ListModuleComponent, [
      {type: DialogComponentType.TITLE, icon: 'title', text: "title"},
      {type: DialogComponentType.TEXT, icon: 'notes', text: "text"},
      {type: DialogComponentType.TEXT2, icon: 'vertical_split', text: "two columns"},
      {type: DialogComponentType.EMPTY, icon: 'crop_16_9', text: "empty section"},
      {type: DialogComponentType.CARDS, icon: 'view_module', text: "cards"}
  ])]



export enum DialogModuleType {
  COLORS, DIMENSIONS, BACKGROUND, COLUMNS
}

export const EDIT_SECTION_MODULES = [
  new DialogModule(ColorModuleComponent, {type: DialogModuleType.COLORS, icon: 'palette', text: "Colors"}),
  new DialogModule(SizeModuleComponent, {type: DialogModuleType.DIMENSIONS, icon: 'straighten', text: "Dimensions"}),
  new DialogModule(ImageModuleComponent, {type: DialogModuleType.BACKGROUND, icon: 'image', text: "Background"})
]


export const EDIT_GRID_MODULES = [
  new DialogModule(ColumnsModuleComponent, {type: DialogModuleType.COLUMNS, icon: 'view_week', text: "Columns"}),
]

export const EDIT_CARD_MODULES = [
  new DialogModule(ColorModuleComponent, {type: DialogModuleType.COLORS, icon: 'palette', text: "Colors"}),
  new DialogModule(ImageModuleComponent, {type: DialogModuleType.BACKGROUND, icon: 'image', text: "Background"})
]

export const EDIT_DIVIDER_MODULES = [
  new DialogModule(DividerColorModuleComponent, {type: DialogModuleType.COLORS, icon: 'palette', text: "Colors"}),
  new DialogModule(DividerSizeModuleComponent, {type: DialogModuleType.DIMENSIONS, icon: 'straighten', text: "Dimensions"})
]

export const EDIT_IMAGE_MODULES = [
  new DialogModule(ImageModuleComponent, {})
]
