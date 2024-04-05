import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [],
  
})
export class AppModule { }

