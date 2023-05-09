import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email,
    ]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6),
    ]),
  });

  constructor(private route: Router, private authService: AuthenticationService) {}

  ngOnInit(): void {}

  onSubmitDetaials() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm);
    const {email, password} = this.loginForm.value
    this.authService.login(email, password).subscribe(() => {
      this.route.navigate(['/dashboard'])
    })
  }
  router() {
    this.route.navigate(['/register']);
  }
}

