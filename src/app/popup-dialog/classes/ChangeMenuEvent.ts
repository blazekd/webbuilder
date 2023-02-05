import { EventMessage } from "./EventMessageEnum";

export class ChangeMenuEvent {
    constructor(public message: EventMessage, public index?: number, public data?: any) {
      
    }
  }