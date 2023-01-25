import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'web-size-module',
  templateUrl: './size-module.component.html',
  styleUrls: ['./size-module.component.scss']
})
export class SizeModuleComponent extends AbstractDialogModule {

  widths = [
    {value: 'width5', viewValue: 'Nejužší'}, 
    {value: 'width4', viewValue: 'Úzký'}, 
    {value: 'width3', viewValue: 'Normální'}, 
    {value: 'width2', viewValue: 'Široký'}, 
    {value: 'width1', viewValue: 'Nejširší'}
  ];

  heights = [
    {value: 'height5', viewValue: 'Nejmenší'}, 
    {value: 'height4', viewValue: 'Malý'}, 
    {value: 'height3', viewValue: 'Normální'}, 
    {value: 'height2', viewValue: 'Vysoký'}, 
    {value: 'height1', viewValue: 'Nejvyšší'}
  ];
}
