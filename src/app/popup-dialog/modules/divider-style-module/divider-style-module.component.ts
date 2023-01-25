import { Component, OnInit } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-divider-style-module',
  templateUrl: './divider-style-module.component.html',
  styleUrls: ['./divider-style-module.component.scss']
})
export class DividerStyleModuleComponent extends AbstractDialogModule {

  //todo?
  title = 'Divider style'

}
