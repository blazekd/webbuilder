import { Component, Input } from '@angular/core';
import { DividerClass, DividerSizeClass } from '../../component-classes';

@Component({
  selector: 'app-section-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input() content!: DividerClass;

}
