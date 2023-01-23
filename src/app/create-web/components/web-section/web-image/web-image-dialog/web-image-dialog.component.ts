import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { base64ToFile, ImageCroppedEvent } from 'ngx-image-cropper';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ImageClass } from '../../../component-classes';

@Component({
  selector: 'app-web-image-dialog',
  templateUrl: './web-image-dialog.component.html',
  styleUrls: ['./web-image-dialog.component.scss']
})
export class WebImageDialogComponent implements OnInit { 
  
  form: UntypedFormGroup;
  progress: number = 0;
  // @Input() image!: ImageClass;
  image: ImageClass;
  imgChangeEvt: any = '';
  @ViewChild('imageBoundary') imageBoundary!: ElementRef;
  @ViewChild('imageFocusPoint') imageFocusPoint!: ElementRef;
  styles: any[] = [
    {value: 1, viewValue: 'Normální'},
    {value: 2, viewValue: 'Kolečko'},
    {value: 3, viewValue: 'Elipsa'}
  ];

  uploading = 0;
  constructor(public dialogRef: MatDialogRef<WebImageDialogComponent>, public fb: UntypedFormBuilder,
    public fileUploadService: FileUploadService,  @Inject(MAT_DIALOG_DATA) public data: any) {

      this.image = data.image;


      // console.log(this.image)
      if (this.image.src != '')
        this.uploading= 2;
      this.form = this.fb.group({
        file: [null]
      })
     }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close(this.image)
  }

  close() {
    this.dialogRef.close()
  }

  uploadFile(event: any) {
    // console.log(event)
    this.imgChangeEvt = event;
    if ((event.target as HTMLInputElement) == null)
      return;
    const file = event?.target.files[0];
    if (!this.checkImage(file))
    {
      alert('Soubor není obrázek')
      return;
    }

    if (!this.checkSize(file)) {
      alert('Soubor je moc velký')
      return;
    }

    this.form.patchValue({
      file: file
    });
    this.form.get('file')?.updateValueAndValidity();
    this.uploadToServer();
  }

  uploadNew() {
    this.uploading = 0;
  }

  gallery() {
    this.uploading = 3;
  }

  uploadToServer() {
    this.fileUploadService.addUser(
      this.form.value.file
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          // console.log('Request has been made!');
          this.uploading = 1;
          break;
        case HttpEventType.ResponseHeader:
          // console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          if (event.total)
            this.progress = Math.round(event.loaded / event.total * 100);
          // console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          this.uploading = 2;
          // console.log('User successfully created!', event.body);
          // this.image = event.body;// change
          this.image.alt = event.body.name;
          this.image.src = event.body.url;
          this.image.height = event.body.height;
          setTimeout(() => {
            this.progress = 0;
          }, 1500);

      }
    })
  }

  checkImage(file: File) {
    return file.type.includes('image');
  }

  checkSize(file: File) {
    return file.size <= 10*1024*1024; // 10MB
  }


  // cropImgPreview: any = '';
  // croppedImg: any = '';

  // onFileChange(event: any): void {
  //   console.log(event)
  //     this.imgChangeEvt = event;
  // }
  // cropImg(e: ImageCroppedEvent) {
  //   // console.log(e);
  //     this.cropImgPreview = e.base64;
  //     // file = e.base64;
  //     // let file = base64ToFile(this.cropImgPreview);
  //     // this.croppedImg = new File([base64ToFile(this.cropImgPreview)], this.image.fileName)
  //     // console.log(file)
  //     // file.name = this.image.name;
  //     // console.log(filex)
  //     // console.log(this.image)
  // }

  // imgLoad() {
  //     // display cropper tool
  // }

  // initCropper() {
  //     // init cropper
  // }
  
  // imgFailed() {
  //     // error msg
  // }


  clickFocusPoint(event: any) {
    // console.log(event)
    // console.log(event.offsetX) // to % left
    // console.log(event.offsetY) // to % top
    // console.log(this.test)
    var height = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').height))
    var width = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').width))
    var ratio = width/height;
    var boundaryX = width > height ? 200 : ratio * 200;
    var boundaryY = height > width ? 200 : 200 / ratio;
    var newLeft = (event.offsetX) / boundaryX * 100 + "%";
    var newTop = (event.offsetY) / boundaryY * 100 + "%";
    this.image.left = newLeft;
    this.image.top = newTop;
    // this.test2.nativeElement.style.left = (event.offsetX) / boundaryX * 100 + "%";
    // this.test2.nativeElement.style.top = (event.offsetY-8) / boundaryY * 100 + "%";
    // console.log(this.test2)
  }

  dropFocusPoint(event: any) {
    console.log(event)

    var height = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').height))
    var width = (parseInt(getComputedStyle(this.imageBoundary.nativeElement, '').width))

    var ratio = width/height;
    var boundaryX = width > height ? 200 : ratio * 200;
    var boundaryY = height > width ? 200 : 200 / ratio;

    var left = parseInt(this.imageFocusPoint.nativeElement.style.left);
    var top = parseInt(this.imageFocusPoint.nativeElement.style.top);



    left = (typeof +left === "number" && !isNaN(+left)) ? left : 50;
    top = (typeof +top === "number" && !isNaN(+top)) ? top : 50;

    event.source._dragRef.reset();


    var newLeft = left + ((event.distance.x) / boundaryX * 100);
    var newTop = top + ((event.distance.y) / boundaryY * 100);
    // this.test2.nativeElement.style.left = this.image.left =newLeft;
    // this.test2.nativeElement.style.top = this.image. top = newTop;
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


    this.image.left = newLeft + "%";
    this.image. top = newTop + "%";
  }
}
