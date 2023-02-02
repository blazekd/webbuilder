import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataManipulationService } from '../services/data-manipulation.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent {

  showPc = true;

  constructor(private service: DataManipulationService) {
    
  }

  importJSON() {
    this.service.importData();
  }

  exportJSON() {
    this.service.exportJSON();
  }

  exportHTML() {
    this.service.exportHTML();
  }
}
