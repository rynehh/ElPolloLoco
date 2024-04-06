import { Injectable, inject } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

firebaseAuth = inject(Auth)

  signIn(params: SignIn): Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth,params.email,params.password).then(()=>{})
    return from(promise);
  }
}

type SignIn={
  email:string;
  password:string;
}
