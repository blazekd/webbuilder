import { Component, Input, OnInit } from '@angular/core';
import { DividerClass, DividerSizeClass } from '../../component-classes';

@Component({
  selector: 'app-section-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {

  @Input() content!: DividerClass;
  constructor() { }

  ngOnInit(): void {
  }


  displayRadius(e: DividerSizeClass) {
    return (e.radiusType === '%' ? e.radius : e.radius / 5) + e.radiusType;
  }
}
