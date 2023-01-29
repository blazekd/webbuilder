import { Component, Input, OnInit } from '@angular/core';
import { DividerSizeClass } from 'src/app/create-web/components/component-classes';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-divider-size-module',
  templateUrl: './divider-size-module.component.html',
  styleUrls: ['./divider-size-module.component.scss']
})
export class DividerSizeModuleComponent extends AbstractDialogModule {

  title = 'Divider dimensions'
  // onRadiusChange($event: any) {
  //   if (this.data.size.radiusType === '%')
  //     this.data.size.radius = $event;
  //   else
  //     this.data.size.radius = $event/5;
  // }

  // onRadiusTypeChange($event: any) {
  //   this.data.size.radiusType = $event;
  //   if (this.data.size.radiusType === '%') {
  //     this.data.size.radius * 5;
  //   } else {
  //     this.data.size.radius / 5;
  //   }
  // }

  displayRadius(e: DividerSizeClass) {
    return (e.radiusType === '%' ? e.radius : e.radius / 5) + e.radiusType;
  }
}
