import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NavMessage } from '../create-web/create-web.component';

@Injectable({
  providedIn: 'root'
})
export class DataManipulationService {

  message: Subject<any> = new Subject();
  constructor() { }

  exportHTML() {
    this.message.next({type: NavMessage.HTML});
  }

  exportJSON() {
    this.message.next({type: NavMessage.JSON});
  }

  importData(data: string) {
    this.message.next({type: NavMessage.IMPORT, data: data});
  }
}
