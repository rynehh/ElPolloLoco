import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  form!: FormGroup;

  constructor(

    private formbuilder: FormBuilder
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
