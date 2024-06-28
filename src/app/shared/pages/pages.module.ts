import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '@shared/pages/sidebar/sidebar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class PagesModule { }
