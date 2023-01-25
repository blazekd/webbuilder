import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-header-module',
  templateUrl: './header-module.component.html',
  styleUrls: ['./header-module.component.scss']
})
export class HeaderModuleComponent implements OnInit {
  @Input() data: any;
  @Output() newEvent = new EventEmitter<ChangeMenuEvent>();
  constructor() { }

  ngOnInit(): void {
  }

}
