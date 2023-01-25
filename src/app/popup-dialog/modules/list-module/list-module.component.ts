import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.scss']
})
export class ListModuleComponent {

  @Input() data: any;
  @Output() newEvent = new EventEmitter<ChangeMenuEvent>();

  close() {
    this.newEvent.emit(new ChangeMenuEvent(EventMessage.CANCEL));
  }

  addSection(type: string, index: number) {
    this.newEvent.emit(new ChangeMenuEvent(EventMessage.ADD, index, type));
  }

}

export class ChangeMenuEvent {
  constructor(public message: EventMessage, public index?: number, public data?: any) {
    
  }
}

export enum EventMessage {
  ADD, CHANGE, CANCEL, SAVE
}