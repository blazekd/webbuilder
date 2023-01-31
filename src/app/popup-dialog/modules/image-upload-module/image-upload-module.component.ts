import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
  uploading = false;
  imgChangeEvt: any = '';

  constructor(public fb: UntypedFormBuilder,
    public fileUploadService: FileUploadService,
    public dialogRef: MatDialogRef<ImageUploadModuleComponent>) {
    super();
    this.form = this.fb.group({
      file: [null]
    })
  }

  
  uploadFile(event: any) {
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
    console.log(file)
  }

  uploadToServer() {
    this.fileUploadService.uploadFile(this.form.value.file).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
            case HttpEventType.Sent:
              this.uploading = true;
              break;
            case HttpEventType.UploadProgress:
              if (event.total)
                this.progress = Math.round(event.loaded / event.total * 100);
              break;
            case HttpEventType.Response:
              this.dialogRef.close(event.body);
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
