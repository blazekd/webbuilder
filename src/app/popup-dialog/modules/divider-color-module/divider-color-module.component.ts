import { Component, Input, OnInit } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-divider-color-module',
  templateUrl: './divider-color-module.component.html',
  styleUrls: ['./divider-color-module.component.scss']
})
export class DividerColorModuleComponent extends AbstractDialogModule {

  title = 'Divider colors'
  formatLabel(value: number): string {
    return `${value*100}%`;
  }
}
