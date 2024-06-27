import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from '@shared/pages/topbar/topbar.component';
import { SidebarComponent } from '@shared/pages/sidebar/sidebar.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    TopbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TopbarComponent,
    SidebarComponent
  ]
})
export class PagesModule { }
