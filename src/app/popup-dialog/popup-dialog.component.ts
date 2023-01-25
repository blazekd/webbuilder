import { Component, Inject, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-settings';
import { ChangeMenuEvent, EventMessage } from './modules/list-module/list-module.component';

@Component({
  selector: 'app-popup-dialog',
  templateUrl: './popup-dialog.component.html',
  styleUrls: ['./popup-dialog.component.scss']
})
export class PopupDialogComponent {
  menuIndex = 0;
  @ViewChild('menuElem', {static: true}) menuElem!: ViewContainerRef;

  constructor(public dialogRef: MatDialogRef<PopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

    }


  handleEvent($event: ChangeMenuEvent) {
    switch ($event.message) {
      case EventMessage.ADD:
        this.dialogRef.close($event.data)
        break;
      case EventMessage.CANCEL:
        this.dialogRef.close();
        break;
      default:
        console.log("default", $event)
    }
  }
}
