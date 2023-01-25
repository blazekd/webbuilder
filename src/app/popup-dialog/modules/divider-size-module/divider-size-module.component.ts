import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider-size-module',
  templateUrl: './divider-size-module.component.html',
  styleUrls: ['./divider-size-module.component.scss']
})
export class DividerSizeModuleComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
