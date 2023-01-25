import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-header-module',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.scss']
})
export class HeaderModuleComponent extends AbstractDialogModule {

}
