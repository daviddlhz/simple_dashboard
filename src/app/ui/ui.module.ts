import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {uiRoutes} from "@ui/ui.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiRoutes)
  ]
})
export class UiModule {}
