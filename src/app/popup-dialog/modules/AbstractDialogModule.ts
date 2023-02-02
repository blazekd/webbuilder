
import { Subject } from "rxjs";
import { Cloneable } from "src/app/create-web/component-classes";
import { ChangeMenuEvent, EventMessage } from "./list-module/list-module.component";

export abstract class AbstractDialogModule {
    data: any;
    dataOld: any;
    newEvent = new Subject<ChangeMenuEvent>();
    message: EventMessage = EventMessage.CHANGE;
    moduleData: any;
    title = 'Missing title';
    handleMessage(message: EventMessage) {
        switch (message) {
            case EventMessage.CANCEL:
                this.data = Cloneable.deepCopy(this.dataOld);
                this.newEvent.next(new ChangeMenuEvent(EventMessage.CHANGE, 0));
                break;
            case EventMessage.SAVE:
                this.newEvent.next(new ChangeMenuEvent(EventMessage.CHANGE, 0));
                break;
            default:
                console.log("Message unhandled.");
        }
    }
}