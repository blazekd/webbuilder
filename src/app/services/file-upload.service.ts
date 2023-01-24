import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  url = 'https://api.czprofi.eu/'
  user: any;
  constructor(private http: HttpClient) {
    this.login()
  }
  //todo

  login() {
    var user = {
      email: 'pepa@zdepa.cz',
      rememberMe: true
    }

    this.http.post(this.url + 'api/auth/login', user).toPromise().then((x: any) => {
      this.user = x;
      console.log(x);
    })
  }


  addUser(file: File) {
    var formData: any = new FormData();
    formData.append("file", file);
    console.log(file)
    return this.http.post(this.url + 'api/v1/documents/upload', formData, {
      reportProgress: true,
      observe: 'events',
      headers: {
        "Authorization": "Bearer " + this.user.accessToken
      },
    })
  }
}
