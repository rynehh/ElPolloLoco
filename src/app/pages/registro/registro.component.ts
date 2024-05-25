import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  form!: FormGroup;
  isRegister = false;
  authService=inject(AuthenticationService);
  constructor(

    private formbuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]] , 
      user:  ['', [Validators.required]] ,
      password2: ['', [Validators.required]] 
    },{
      validators: this.passwordMatchValidator
    });
  }
  RedSig(){
    this.router.navigate(['signin']);
  }
  errorMessage: string|null =null;
  resgister(){
    this.isRegister=true;
    this.authService.register({
     email: this.form.value.email,
     username: this.form.value.user,
     password: this.form.value.password
    }).subscribe({
     next:() => {
      this.router.navigate(['signin']);
    },
     error:(err) => {
      this.errorMessage="Fallo en el registro";
      this.isRegister=false;
    },
   });
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('password2')?.value;
    if (password !== confirmPassword) {
      formGroup.get('password2')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('password2')?.setErrors(null);
    }
  }
}
