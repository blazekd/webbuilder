import { Component, Input, OnInit } from '@angular/core';
import { DividerClass, DividerSizeClass } from '../../component-classes';

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


  displayRadius(e: DividerSizeClass) {
    return (e.radiusType === '%' ? e.radius : e.radius / 5) + e.radiusType;
  }
}
