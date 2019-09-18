import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl = environment.baseURL ;
  constructor(private http: HttpClient) { }
  
  login(data:any){
    let url = this.baseUrl+'login';
    return this.http.post(url,data);
  }

  register(data:any){
    let url = this.baseUrl+'register';
    return this.http.post(url,data);
  }

}
