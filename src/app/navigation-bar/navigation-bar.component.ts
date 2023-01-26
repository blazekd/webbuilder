import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {
  //todo sidenav asi už není ne
  @Output() toggleSidenav = new EventEmitter<void>();

  returnUrl = '/';

  showPc = true;

  constructor(private router: Router) {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        this.returnUrl = event.url;

        console.log('NavigationBarComponent returnUrl: ' + this.returnUrl);
      }

    });

  }

  public onProfile() {

  }

  public logout() {

  }

}
