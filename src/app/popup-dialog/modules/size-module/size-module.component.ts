import { Component,  Input, OnInit, Output } from '@angular/core';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ChangeMenuEvent } from '../list-module/list-module.component';

@Component({
  selector: 'app-size-module',
  templateUrl: './size-module.component.html',
  styleUrls: ['./size-module.component.scss']
})
export class SizeModuleComponent extends AbstractDialogModule {
  title = 'Dimensions'
  widths = [
    {value: '1000', viewValue: 'Narrower'}, 
    {value: '1300', viewValue: 'Narrow'}, 
    {value: '1600', viewValue: 'Normal'}, 
    {value: '1750', viewValue: 'Wide'}, 
    {value: 'unset', viewValue: 'Wider'}
  ];

  heights = [
    {value: '0', viewValue: 'Smaller'}, 
    {value: '25', viewValue: 'Small'}, 
    {value: '50', viewValue: 'Normal'}, 
    {value: '75', viewValue: 'Large'}, 
    {value: '100', viewValue: 'Larger'}
  ];
}
