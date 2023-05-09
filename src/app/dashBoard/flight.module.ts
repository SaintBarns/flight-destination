import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { FlightDashboardComponent } from './flight-dashboard/flight-dashboard.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { FQAComponent } from './fqa/fqa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    FlightDashboardComponent,
    MainComponent,
    ContactComponent,
    FQAComponent,

  ],
  imports: [FormsModule, RouterModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  exports: [RouterModule],
})
export class FlightModule {}
