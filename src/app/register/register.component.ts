import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MustMatch } from '../_helpers/must-match.validator' ;
import { HttpService } from 'src/app/_services/http.service';
import { error } from 'util';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false ;

  constructor(
    private formBuilder: FormBuilder, 
    private http:HttpService,
    private auth:AuthService, 
    private router:Router) { }

  ngOnInit() {
      this.registerForm  = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },{
         validator: MustMatch('password', 'confirmPassword') 
      });

  }

  get f() {return this.registerForm.controls ;}

  onSubmit(){
     this.submitted = true ; 
      if(this.registerForm.invalid){
       return ;
      }
      console.log(this.registerForm.value);
      this.http.register(this.registerForm.value).subscribe(
        (data:any)=>{
          const token = data.data.token ;
          if(data.message.type === "success"){
            this.auth.sendToken(token);
            setTimeout(d=>{
              this.router.navigate(["dashboard"]);
            },1000);
          }          
        },
        error=>{console.log(error)}
      )
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }

}
