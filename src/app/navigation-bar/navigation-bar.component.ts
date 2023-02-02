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
    let data = 'importuju';
    var input = document.createElement('input');
    input.type = 'file'
    input.click();
    // input.onchange = function (e) {
    //   if (input.files)
    //     this.service.importData(input.files[0]);
    // }

    input.addEventListener('change', function(service: any, e: any) {
      console.log(e, input, service)
      if (input.files)
        service.importData(input.files[0]);
    }.bind(input, this.service));
    
  }

  exportJSON() {
    this.service.exportJSON();
  }

  exportHTML() {
    this.service.exportHTML();
  }

  notImplemented() {
    alert('NOT IMPLEMENTED');
  }
}
