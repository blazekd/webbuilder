import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { ImageClass } from '../../../create-web/component-classes';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ImageUploadModuleComponent } from '../image-upload-module/image-upload-module.component';
import { MatDialog } from '@angular/material/dialog';
import { GalleryModuleComponent } from '../gallery-module/gallery-module.component';

@Component({
  selector: 'app-image-module',
  templateUrl: './image-module.component.html',
  styleUrls: ['./image-module.component.scss']
})
export class ImageModuleComponent extends AbstractDialogModule {


  title = 'Image settings'
  @ViewChild('imageBoundary') imageBoundary!: ElementRef;
  @ViewChild('imageFocusPoint') imageFocusPoint!: ElementRef;


  constructor(public dialog: MatDialog) {
    super();

  }


  uploadImage() {
    let dialogRef = this.dialog.open(ImageUploadModuleComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.data.src = result[0].image;
    });
  }

  showGallery() {
    let dialogRef = this.dialog.open(GalleryModuleComponent);
    //TODO do not remove image if not selected
    dialogRef.afterClosed().subscribe(result => {
      this.data.src = result;
    });
  }

  deleteImage() {
    this.data.src = '';
  }




  clickFocusPoint(event: any) {
    var height = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').height))
    var width = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').width))
    var ratio = width / height;
    var boundaryX = width > height ? 200 : ratio * 200;
    var boundaryY = height > width ? 200 : 200 / ratio;
    var newLeft = (event.offsetX) / boundaryX * 100 + "%";
    var newTop = (event.offsetY) / boundaryY * 100 + "%";
    this.data.left = newLeft;
    this.data.top = newTop;
  }

  dropFocusPoint(event: any) {

    var height = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').height))
    var width = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').width))

    var ratio = width / height;
    var boundaryX = width > height ? 200 : ratio * 200;
    var boundaryY = height > width ? 200 : 200 / ratio;

    var left = parseInt(this.imageFocusPoint.nativeElement.style.left);
    var top = parseInt(this.imageFocusPoint.nativeElement.style.top);



    left = (typeof +left === "number" && !isNaN(+left)) ? left : 50;
    top = (typeof +top === "number" && !isNaN(+top)) ? top : 50;

    event.source._dragRef.reset();


    var newLeft = left + ((event.distance.x) / boundaryX * 100);
    var newTop = top + ((event.distance.y) / boundaryY * 100);
    if (newLeft < 0)
      newLeft = 0;
    if (newLeft > 45 && newLeft < 55)
      newLeft = 50;
    if (newLeft > 100)
      newLeft = 100;

    if (newTop < 0)
      newTop = 0;
    if (newTop > 45 && newTop < 55)
      newTop = 50;
    if (newTop > 100)
      newTop = 100;


    this.data.left = newLeft + "%";
    this.data.top = newTop + "%";
  }
}
