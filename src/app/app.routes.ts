import { Routes } from '@angular/router';

export const routes: Routes = [{
    
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
        .then(m => m.SigninModule)
  }
];
