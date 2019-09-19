import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false ;
    
  constructor(
    private auth: AuthService, 
    private http: HttpService, 
    private router:Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  

  get f(){ return this.loginForm.controls; }

  onSubmit(){
    this.submitted = true ; 
     if(this.loginForm.invalid){
      return ;
     }
     console.log(this.loginForm.value);
     this.http.login(this.loginForm.value).subscribe(
       (data:any)=>{
         const token = data.data.token ;
         if(data.message.type === "success"){
           this.auth.sendToken(token);
           setTimeout(d=>{
             this.router.navigate(["dashboard"]);
           },1000);
         }else{
           console.log(data);
         }          
       },
       error=>{
        Swal.fire('Error',error.error.text,'error');
       }
     )
  }

}
