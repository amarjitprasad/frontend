import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModuleRouting } from './layout.module.routing';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { ProfileLayoutComponent } from './profile-layout/profile-layout.component';
import { HeaderLayoutComponent} from './header-layout/header-layout.component';
import { FooterLayoutComponent } from 'src/app/layout/footer-layout/footer-layout.component';
import { SidebarLayoutComponent } from 'src/app/layout/sidebar-layout/sidebar-layout.component';


@NgModule({
    declarations:[
      PublicLayoutComponent,
      ProfileLayoutComponent,
      HeaderLayoutComponent,
      FooterLayoutComponent,
      SidebarLayoutComponent
    ],
    imports:[
      CommonModule,
      LayoutModuleRouting
    ]
})

export class LayoutModule{

}