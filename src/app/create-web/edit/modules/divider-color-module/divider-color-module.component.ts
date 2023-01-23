import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider-color-module',
  templateUrl: './divider-color-module.component.html',
  styleUrls: ['./divider-color-module.component.scss']
})
export class DividerColorModuleComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
