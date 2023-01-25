import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { AbstractDialogModule } from '../AbstractDialogModule';

@Component({
  selector: 'app-image-upload-module',
  templateUrl: './image-upload-module.component.html',
  styleUrls: ['./image-upload-module.component.scss']
})
export class ImageUploadModuleComponent extends AbstractDialogModule {
  title = 'Image upload'
  form: UntypedFormGroup;
  progress: number = 0;
  uploading = 0;
  imgChangeEvt: any = '';

  constructor(public fb: UntypedFormBuilder,
    public fileUploadService: FileUploadService) {
    super();
    this.form = this.fb.group({
      file: [null]
    })
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

    // this.form.patchValue({
    //   file: file
    // });
    // this.form.get('file')?.updateValueAndValidity();
    // this.uploadToServer();
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
          this.data.alt = event.body.name;
          this.data.src = event.body.url;
          this.data.height = event.body.height;
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
}
