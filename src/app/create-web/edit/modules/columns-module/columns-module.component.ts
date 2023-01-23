import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-columns-module',
  templateUrl: './columns-module.component.html',
  styleUrls: ['./columns-module.component.scss']
})
export class ColumnsModuleComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit(): void {
  }

  onModelChange(event: any) {
    // console.log(event)
    this.data.columns.columns = event;
    if (this.data.columns.content) {
      for (let i = 0; i < 5; ++i) {
        this.data.columns.content[i].flexBasis = 100/event + '%';
      }
    }
  }

}
