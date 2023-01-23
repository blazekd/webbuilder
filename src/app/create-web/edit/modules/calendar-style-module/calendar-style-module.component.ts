import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-style-module',
  templateUrl: './calendar-style-module.component.html',
  styleUrls: ['./calendar-style-module.component.scss']
})
export class CalendarStyleModuleComponent implements OnInit {

  @Input() data: any;
  //todo delete
  constructor() { }

  ngOnInit(): void {
  }

}
