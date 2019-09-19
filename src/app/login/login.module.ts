import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginRoutingModule } from 'src/app/login/login.routing.module';
import {  ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,    
    ReactiveFormsModule
  ]
})
export class LoginModule { }
