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
    {value: 'width5', viewValue: 'Narrower'}, 
    {value: 'width4', viewValue: 'Narrow'}, 
    {value: 'width3', viewValue: 'Normal'}, 
    {value: 'width2', viewValue: 'Wide'}, 
    {value: 'width1', viewValue: 'Wider'}
  ];

  heights = [
    {value: 'height5', viewValue: 'Smaller'}, 
    {value: 'height4', viewValue: 'Small'}, 
    {value: 'height3', viewValue: 'Normal'}, 
    {value: 'height2', viewValue: 'Large'}, 
    {value: 'height1', viewValue: 'Larger'}
  ];
}
