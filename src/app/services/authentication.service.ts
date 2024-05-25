import { Injectable, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, user } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserInterface } from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  firebaseAuth= inject(Auth);
  user$=user(this.firebaseAuth);
  currentUserSig=signal<UserInterface|null|undefined>(undefined)

  constructor() {}

  register(params: Register): Observable<void> {
    return from(createUserWithEmailAndPassword(this.firebaseAuth, params.email, params.password)
      .then(response => updateProfile(response.user, { displayName: params.username })));
  }

  signIn(params: SignIn): Observable<void> {
    return from(signInWithEmailAndPassword(this.firebaseAuth, params.email, params.password).then(() => {}));
  }

  logout():Observable<void>{
    const promise= signOut(this.firebaseAuth);
    return from(promise);
  }

}

type SignIn = {
  email: string;
  password: string;
}

type Register = {
  email: string;
  username: string;
  password: string;
}
