import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLayoutComponent } from 'src/app/layout/profile-layout/profile-layout.component';
import { PublicLayoutComponent } from 'src/app/layout/public-layout/public-layout.component';


const routes:Routes= [
    {
        path:'',
        redirectTo:'/login',
        pathMatch: 'full'
    },
    {
        path:'',
        component:ProfileLayoutComponent,
        children:[
            { path:'dashboard', loadChildren :()=> import('../../dashboard/dashboard.module').then(m=>m.DashboardModule)},
            { path:'dashboard', loadChildren :()=> import('../../dashboard/dashboard.module').then(m=>m.DashboardModule)},
        ]
    },
    {
        path:'',
        component:PublicLayoutComponent,
        children:[
            { path:'login', loadChildren:()=>import('../../login/login.module').then(m=>m.LoginModule)},
            { path:'register', loadChildren:()=>import('../register/register.module').then(m=>m.RegisterModule)}
        ]
    }

 ];
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class LayoutModuleRouting{

}