import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  sendToken(token : string){
    localStorage.setItem('LoggedInToken', token);
  }

  getToken(){
    return localStorage.getItem('LoggedInToken');
  }

  isLoggedIn(){
    console.log(this.getToken());
    return this.getToken() !== null ;
  }

  logout(){
    localStorage.removeItem("LoggedInToken");
    this.router.navigate(['login']);
  }

}
