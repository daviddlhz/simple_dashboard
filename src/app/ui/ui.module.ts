import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {uiRoutes} from "@ui/ui.routing";
import { HomeComponent } from './home/home.component';
import {PagesModule} from "@shared/pages/pages.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiRoutes),
    PagesModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class UiModule {}
