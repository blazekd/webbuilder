import { Component, Input, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent extends AbstractDialogModule {
  title = 'Menu'
  close() {
    this.newEvent.next(new ChangeMenuEvent(EventMessage.CANCEL));
  }

  onClick(type: string, index: number) {
    // index + 1, because 0 is menu, used during changing
    this.newEvent.next(new ChangeMenuEvent(this.message, index + 1, type));
  }

}

export class ChangeMenuEvent {
  constructor(public message: EventMessage, public index?: number, public data?: any) {
    
  }
}

export enum EventMessage {
  ADD, CHANGE, CANCEL, SAVE
}