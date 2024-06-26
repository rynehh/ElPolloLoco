import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {


  form!: FormGroup;
  isLoggingIn = false;
  authService=inject(AuthenticationService);
  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]      
    });
  }
  RedReg(){
    this.router.navigate(['registro']);
  }
  errorMessage: string|null =null;
  login(){
   this.isLoggingIn=true;
   this.authService.signIn({
    email: this.form.value.email,
    password: this.form.value.password
   }).subscribe({
    next:() => {
      alert("Inicio exitoso");
      this.router.navigate(['inicio']);
   },
    error:(err) => {
    this.errorMessage="Inicio fallido"
    this.isLoggingIn=false;
   },
  });
  }

}
