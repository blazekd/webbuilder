import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  message: Subject<any> = new Subject();
  constructor() { }

  exportHTML() {
    this.message.next({type: 'HTML'});
  }

  exportJSON() {
    this.message.next({type: 'JSON'});
  }

  importData(data: string) {
    this.message.next({type: 'import', data: data});
  }
}
