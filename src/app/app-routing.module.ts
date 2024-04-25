import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module')
        .then(m => m.SigninModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module')
        .then(m => m.HomeModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module')
    .then(m => m.RegistroModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('./pages/inicio/inicio.module')
      .then(m => m.InicioModule)
      },
      {
        path: 'carrito',
        loadChildren: () => import('./pages/carrito/carrito.module')
        .then(m => m.CarritoModule)
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
