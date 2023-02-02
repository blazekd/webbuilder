import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, Inject, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { Cloneable } from '../create-web/component-classes';
import { DialogData } from './dialog-settings';
import { ChangeMenuEvent, EventMessage } from './modules/list-module/list-module.component';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements OnInit {
  menuIndex = 0;
  title = '';
  sendMessage = new Subject<EventMessage>();
  subscription = new Subscription;


  @ViewChild('menuElem', {static: true, read: ViewContainerRef}) menuElem!: ViewContainerRef;
  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {

    }

    ngOnInit(): void {
      this.changeMenu(0);
  }


  handleEvent($event: ChangeMenuEvent) {
    switch ($event.message) {
      case EventMessage.ADD:
        this.dialogRef.close($event.data)
        break;
      case EventMessage.CANCEL:
        this.dialogRef.close();
        break;
      case EventMessage.CHANGE:
        if ($event.index !== undefined)
          this.changeMenu($event.index);
        break;
      default:
        console.log("default", $event)
    }
  }

  save() {
    if (this.menuIndex == 0)
      this.dialogRef.close(this.dialogData.data);
    this.sendMessage.next(EventMessage.SAVE);

  }

  cancel() {
    if (this.menuIndex == 0) {
      this.dialogRef.close();
    }
    this.sendMessage.next(EventMessage.CANCEL);

  }

  changeMenu(i: number) {
    this.menuIndex = i;
    if (this.menuElem)
      this.menuElem.clear();
    const componentRef = this.menuElem.createComponent(this.dialogData.list[this.menuIndex].component);
    componentRef.instance.newEvent.subscribe((x: ChangeMenuEvent) => this.handleEvent(x));
    componentRef.instance.moduleData = this.dialogData.list[this.menuIndex].moduleData;
    componentRef.instance.dataOld = Cloneable.deepCopy(this.dialogData.data);
    componentRef.instance.data = this.dialogData.data;
    componentRef.instance.message = this.dialogData.message;
    this.subscription.unsubscribe();
    this.subscription = this.sendMessage.subscribe(x => componentRef.instance.handleMessage(x));
    this.title = componentRef.instance.title;
  }
}
