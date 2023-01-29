import { Component, Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-logo-module',
  templateUrl: './logo-module.component.html',
  styleUrls: ['./logo-module.component.scss']
})
export class LogoModuleComponent extends AbstractDialogModule {

  title = 'Logo and title'
  changeTitleText() {
    this.data.logo.hasTitleText = !this.data.logo.hasTitleText && this.data.logo.hasTitle
  }

  changeLogoText() {
    this.data.logo.hasLogoText = !this.data.logo.hasLogoText && this.data.logo.hasLogo;
  }

  changeLogo() {
    this.data.logo.hasLogo = !this.data.logo.hasLogo;
    if (!this.data.logo.hasLogo)
      this.data.logo.hasLogoText = false;
  }

  changeTitle() {
    this.data.logo.hasTitle = !this.data.logo.hasTitle;
    if (!this.data.logo.hasTitle)
      this.data.logo.hasTitleText = false;
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
