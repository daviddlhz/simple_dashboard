import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '@ui/users/component/user.component';
import {RouterModule} from "@angular/router";
import {userRoutes} from "@ui/users/users.routing";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "@shared/shared.module";
import {UserProvider} from "@core/providers/user.provider";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [UserProvider]
})
export class UsersModule { }
