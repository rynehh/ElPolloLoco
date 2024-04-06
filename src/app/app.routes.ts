import { Routes } from '@angular/router';

export const routes: Routes = [{
    
  path: 'signin',
  loadChildren: () => import('./pages/signin/signin.module')
    .then(m => m.SigninModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
    .then(m => m.HomeModule)
    }
];
