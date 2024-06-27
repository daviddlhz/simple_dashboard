import { Routes } from '@angular/router';

export const uiRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', loadChildren: () => import('@ui/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }
];
