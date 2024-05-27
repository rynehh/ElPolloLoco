import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { RouterModule } from '@angular/router'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; // Importa AngularFirestoreModule en lugar de FirestoreModule
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { defaultEnvironment } from './environments/environment.default';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    AngularFireModule.initializeApp(defaultEnvironment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CarouselModule.forRoot(),
  ],
  providers: [],
})
export class AppModule { 
   ngDoBootstrap() {}
}