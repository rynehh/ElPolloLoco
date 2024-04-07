import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

firebaseAuth = inject(Auth)

  register(params: Register): Observable<void>{
    const promise= createUserWithEmailAndPassword(this.firebaseAuth,params.email,params.password).then(response=>updateProfile(response.user,{displayName: params.username}))
    return from(promise);
  }

  signIn(params: SignIn): Observable<void>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth,params.email,params.password).then(()=>{})
    return from(promise);
  }
}

type SignIn={
  email:string;
  password:string;
}

type Register={
  email:string;
  username: string;
  password:string;
}
