import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[menuTemp]',
})
export class EditDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}