import { Component, Input, OnInit } from '@angular/core';
import { ComponentData } from '../../create-web.component';

@Component({
  selector: 'web-footer',
  templateUrl: './web-footer.component.html',
  styleUrls: ['./web-footer.component.scss']
})
export class WebFooterComponent implements OnInit {

  @Input() component!: ComponentData;
  // test = "© 2021 Worlds Collide. Všechna práva vyhrazena."
  constructor() { }

  ngOnInit(): void {
  }

  getStyle2() {
    return {
      // backgroundImage: this.component.data.background.background,
      backgroundColor: this.component.data.color.background,
      color: this.component.data.color.color,

    }
  }

}
