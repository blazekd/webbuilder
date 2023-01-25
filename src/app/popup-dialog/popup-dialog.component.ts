import { AfterContentInit, AfterViewInit, Component, Inject, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-settings';
import { ChangeMenuEvent, EventMessage } from './modules/list-module/list-module.component';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent implements AfterViewInit {
  menuIndex = 0;
  @ViewChild('menuElem', {static: false, read: ViewContainerRef}) menuElem!: ViewContainerRef;
  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {

    }

    ngAfterViewInit(): void {
      this.changeMenu(0);
  }


  handleEvent($event: ChangeMenuEvent) {
    console.log(this.dialogData);
    switch ($event.message) {
      case EventMessage.ADD:
        this.dialogRef.close($event.data)
        break;
      case EventMessage.CANCEL:
        this.dialogRef.close();
        break;
      case EventMessage.CHANGE:
        if ($event.index)
          this.changeMenu($event.index);
        break;
      default:
        console.log("default", $event)
    }
  }

  changeMenu(i: number) {
    this.menuIndex = i;
    this.menuElem.clear();
    const componentRef = this.menuElem.createComponent(this.dialogData.list[this.menuIndex].component);
    componentRef.instance.newEvent.subscribe((x: ChangeMenuEvent) => this.handleEvent(x));
    componentRef.instance.moduleData = this.dialogData.list[this.menuIndex].moduleData;
    componentRef.instance.data = this.dialogData.data;
    componentRef.instance.message = this.dialogData.message;
    //todo decide if add or change
    // componentRef.instance.message = EventMessage.ADD;
  }
}
