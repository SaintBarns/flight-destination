import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FlightDashboardComponent } from './flight-dashboard/flight-dashboard.component';
import { FQAComponent } from './fqa/fqa.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path: '',
    component: FlightDashboardComponent,
    children: [
      {
        path: 'dashboard',
        component: FlightDashboardComponent,
      },
      {
        path: 'fqa',
        component: FQAComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: SignUpComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlightRoutingRoutingModule {}
