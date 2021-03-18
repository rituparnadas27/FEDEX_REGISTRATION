import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';



const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  httpPost(url: string, data: any): Observable<any> {
    return (this.http
      .post(url, data, httpOptions)
      .pipe(catchError((error: any) => {
          return throwError(error.status);
      }))
);
}


}
