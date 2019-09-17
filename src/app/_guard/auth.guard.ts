import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private _router:Router, private auth:AuthService){

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    if(this.auth.isLoggedIn()){   
      console.log("abc");           
      return true ;
    }else{
      console.log("cde");    
      this._router.navigate(["login"]);
      return false ;
    }
  }

}
