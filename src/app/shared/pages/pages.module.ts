import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '@shared/pages/topbar/topbar.component';
import { SidebarComponent } from '@shared/pages/sidebar/sidebar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class PagesModule { }
