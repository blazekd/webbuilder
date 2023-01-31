import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'app-columns-module',
  templateUrl: './columns-module.component.html',
  styleUrls: ['./columns-module.component.scss']
})
export class ColumnsModuleComponent extends AbstractDialogModule {
  title = 'Columns'
  onModelChange(event: any) {
    this.data.columns.columns = event;
    if (this.data.columns.content) {
      for (let i = 0; i < this.data.columns.content.length; ++i) {
        this.data.columns.content[i].flexBasis = 100/event + '%';
      }

    }
  }
}

