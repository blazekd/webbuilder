import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  api = 'https://webbuilder.blazekd.cz/api/'
  uploadUrl = this.api + 'uploadimage.php'
  getUrl = this.api + 'getimages.php'


  constructor(private http: HttpClient) {

  }

  uploadFile(file: File) {
    var formData: FormData = new FormData();
    formData.append("images[]", file);
    return this.http.post(this.uploadUrl, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }

  getImages() {
    return this.http.get(this.getUrl);
  }

}
