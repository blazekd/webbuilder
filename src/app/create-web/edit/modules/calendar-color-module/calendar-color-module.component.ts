import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-color-module',
  templateUrl: './calendar-color-module.component.html',
  styleUrls: ['./calendar-color-module.component.scss']
})
export class CalendarColorModuleComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
