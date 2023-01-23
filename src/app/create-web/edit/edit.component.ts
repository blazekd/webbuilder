import { Component, ComponentFactoryResolver, Inject, OnInit, Type, ViewChild } from '@angular/core';
import { EditDirective } from './edit.directive';

import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { EditMenuData, EditMenuModule, EditDialog } from '../components/component-classes';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  menu: number = 0;
  list: EditMenuModule[];

  @ViewChild(EditDirective, {static: true}) menuTemp!: EditDirective;



  constructor(private componentFactoryResolver: ComponentFactoryResolver, public dialogRef: MatDialogRef<EditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditDialog) {
      this.list = data.list;
     }

  ngOnInit(): void {

  }


  
  save() {
    this.menu = 0;
  }

  cancel() {
    this.menu = 0;
  }

  changeMenu(i: number) {
    console.log (this.data.data);
    this.menu = i;

    const menuItem = this.list[this.menu];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(menuItem.component);

    const viewContainerRef = this.menuTemp.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<EditMenuData>(componentFactory);
    componentRef.instance.data = this.data.data;
  }
}

