import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-logo-module',
  templateUrl: './logo-module.component.html',
  styleUrls: ['./logo-module.component.scss']
})
export class LogoModuleComponent implements OnInit {


  @Input() data: any;
  @Output() newEvent = new EventEmitter<ChangeMenuEvent>();
  constructor() { }

  ngOnInit(): void {
  }


  changeTitleText() {
    this.data.logo.haveTitleText = !this.data.logo.haveTitleText && this.data.logo.haveTitle
  }

  changeLogoText() {
    this.data.logo.haveLogoText = !this.data.logo.haveLogoText && this.data.logo.haveLogo;
  }

  changeLogo() {
    this.data.logo.haveLogo = !this.data.logo.haveLogo;
    if (!this.data.logo.haveLogo)
      this.data.logo.haveLogoText = false;
  }

  changeTitle() {
    this.data.logo.haveTitle = !this.data.logo.haveTitle;
    if (!this.data.logo.haveTitle)
      this.data.logo.haveTitleText = false;
  }

  changeTitleHighlightOpacity(event: any) {
    this.data.logo.titleHighlightOpacity = event.value;
  }

  changeLogoHighlightOpacity(event: any) {
    this.data.logo.logoHighlightOpacity = event.value;
  }

  
  formatLabel(value: number) {
    //   console.log (Math.round(value * 100) + '%');
      return Math.round(value * 100) + '%';
    }
}
