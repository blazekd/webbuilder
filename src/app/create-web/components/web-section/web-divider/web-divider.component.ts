import { Component, Input, OnInit } from '@angular/core';
import { DividerClass } from '../../component-classes';

@Component({
  selector: 'web-section-divider',
  templateUrl: './web-divider.component.html',
  styleUrls: ['./web-divider.component.scss']
})
export class WebDividerComponent implements OnInit {


  @Input() content!: DividerClass;
  constructor() { }

  ngOnInit(): void {
  }

}
