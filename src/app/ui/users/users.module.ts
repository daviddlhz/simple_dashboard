import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@ui/users/component/user.component';
import {RouterModule} from "@angular/router";
import {userRoutes} from "@ui/users/users.routing";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    SharedModule
  ]
})
export class UsersModule { }
