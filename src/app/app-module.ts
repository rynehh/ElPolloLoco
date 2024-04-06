import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { defaultEnvironment } from './environments/environment.default';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(defaultEnvironment.firebase),
    AngularFireAuthModule, // Make sure AngularFireAuthModule is imported
  ],
  providers: [],
})
export class AppModule { }