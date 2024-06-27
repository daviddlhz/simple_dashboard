import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "@ui/dashboard/component/dashboard.component";
import { RouterModule } from "@angular/router";
import { DashboardRoutes } from "@ui/dashboard/dashboard.routing";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    SharedModule
  ]
})
export class DashboardModule { }
