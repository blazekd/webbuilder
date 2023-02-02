import { Component, Input, OnInit } from '@angular/core';
import { DividerSizeClass } from '../../../create-web/component-classes';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-divider-size-module',
  templateUrl: './divider-size-module.component.html',
  styleUrls: ['./divider-size-module.component.scss']
})
export class DividerSizeModuleComponent extends AbstractDialogModule {

  title = 'Divider dimensions'


  displayRadius(e: DividerSizeClass) {
    return (e.radiusType === '%' ? e.radius : e.radius / 5) + e.radiusType;
  }
}
