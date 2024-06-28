import { Routes } from '@angular/router';
import {HomeComponent} from "@ui/home/home.component";

export const uiRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('@ui/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: '', loadChildren: () => import('@ui/users/users.module').then(m => m.UsersModule) }
    ]
  }
];
