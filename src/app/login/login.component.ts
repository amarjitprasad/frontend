import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { HttpService } from 'src/app/_services/http.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    submitted = false;
    loginForm = new FormGroup({
        LoginID: new FormControl('', [
            Validators.required
        ]),
        Password: new FormControl('',[
        Validators.required,
        Validators.minLength(6),
        ]),
    });
  constructor(private auth: AuthService, private http: HttpService, private router:Router) { }

  ngOnInit() {
  }
  get f() { return this.loginForm.controls; }

}
