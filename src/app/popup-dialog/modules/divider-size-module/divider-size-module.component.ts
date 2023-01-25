import { Component, Input, OnInit } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-divider-size-module',
  templateUrl: './divider-size-module.component.html',
  styleUrls: ['./divider-size-module.component.scss']
})
export class DividerSizeModuleComponent extends AbstractDialogModule {

  title = 'Divider dimensions'
}
