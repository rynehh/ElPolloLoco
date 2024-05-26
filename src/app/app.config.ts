import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http'
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore'; // Si estás utilizando Firestore
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyC-MdKvP2JkdqV8jLUNbUC67jFP7F7gq0M",
  authDomain: "elpolloloco-9e201.firebaseapp.com",
  projectId: "elpolloloco-9e201",
  storageBucket: "elpolloloco-9e201.appspot.com",
  messagingSenderId: "588599118327",
  appId: "1:588599118327:web:60c5cfe544c92bdfabc6f2"
};

export const appConfig: ApplicationConfig = {
  
  providers: [
    
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig},
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(()=>getAuth()),
    provideFirestore(() => getFirestore()), 
  ]
};