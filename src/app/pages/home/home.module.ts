import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CarouselModule } from 'ngx-bootstrap/carousel';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    CarouselModule.forRoot()
  ]
})
export class HomeModule { 
  ngDoBootstrap() {}
}
