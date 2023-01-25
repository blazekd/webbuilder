import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-button-module',
  templateUrl: './button-module.component.html',
  styleUrls: ['./button-module.component.scss']
})
export class ButtonModuleComponent extends AbstractDialogModule {


  
  buttons = [
    'button1', 'button2', 'button3', 'button4'
  ]  


  changeButton(button: string) {;
    this.data.button.style = button;
  }


  formatLabel(value: number) {
  //   console.log (Math.round(value * 100) + '%');
    return Math.round(value * 100) + '%';
  }

  changeOpacity(event: any) {
    this.data.button.opacity = event.value;
  }
}
