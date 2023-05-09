import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export function passWordMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null =>{
    const password = control.get('password')?.value;
    const ConfirmPassword = control.get('ConfirmPassword')?.value;

    if(password && ConfirmPassword && password !== ConfirmPassword){
      return{
        passwordsDontMatch: true,
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup(
    {
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      ConfirmPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    },
    { validators: passWordMatchValidator() }
  );
  constructor(private route: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmitDetaials() {
    if (!this.signUpForm.valid) return;

    const {name, email, password, ConfirmPassword} = this.signUpForm.value;
    this.authService.signUp(name, email, password, ConfirmPassword).subscribe(() =>{
      this.route.navigate(['/dashboard']);
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }
  get email() {
    return this.signUpForm.get('email');
  }
  get password() {
    return this.signUpForm.get('password');
  }
  get ConfirmPassword() {
    return this.signUpForm.get('ConfirmPassword');
  }

  router() {
    this.route.navigate(['/login']);
  }
}
