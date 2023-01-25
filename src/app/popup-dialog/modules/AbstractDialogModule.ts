
import { EventEmitter } from "@angular/core";
import { ChangeMenuEvent, EventMessage } from "./list-module/list-module.component";

export abstract class AbstractDialogModule {
    data: any;
    newEvent = new EventEmitter<ChangeMenuEvent>();
    message: EventMessage = EventMessage.CHANGE;
    moduleData: any;
}