import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { AbstractDialogModule } from '../AbstractDialogModule';
import { ImageUploadModuleComponent } from '../image-upload-module/image-upload-module.component';

@Component({
  selector: 'app-gallery-module',
  templateUrl: './gallery-module.component.html',
  styleUrls: ['./gallery-module.component.scss']
})
export class GalleryModuleComponent extends AbstractDialogModule {
  title = 'Gallery'

  images: any = []

  constructor(public fileUploadService: FileUploadService,
    public dialogRef: MatDialogRef<ImageUploadModuleComponent>) {
    super();
    this.fileUploadService.getImages().subscribe(x => {
      console.log("newx", x)
      this.images = x;
    })
  }

  chooseImage(url: string) {
    this.dialogRef.close(url);
  }

  cancel() {
    this.dialogRef.close();
  }
}
