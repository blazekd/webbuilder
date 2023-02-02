import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  message: Subject<any> = new Subject();
  constructor() { }

  exportHTML() {
    this.message.next('HTML');
  }

  exportJSON() {
    this.message.next('JSON');
  }

  importData() {
    this.message.next('import');
  }
}
