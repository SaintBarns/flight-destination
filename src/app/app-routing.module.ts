import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './dashBoard/login/login.component';
import { FlightDashboardComponent } from './dashBoard/flight-dashboard/flight-dashboard.component';
import { SignUpComponent } from './dashBoard/sign-up/sign-up.component';
import { FQAComponent } from './dashBoard/fqa/fqa.component';
import { ContactComponent } from './dashBoard/contact/contact.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectTologin  = () => redirectUnauthorizedTo (['login'])
const redirectToHome  = () => redirectLoggedInTo (['contact'])

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
      },

      // {
      //   path: 'dashboard',
      //   loadChildren: () =>
      //     import('./dashBoard/flight.module').then((m) => m.FlightModule),
      // },
      // {
      //   path: 'barns',
      //   loadChildren: () =>
      //     import('./polo/polo.module').then((m) => m.PoloModule),
      // },
      {
        path: 'login',
        component: LoginComponent,
        ...canActivate(redirectToHome),
      },
      {
        path: 'dashboard',
        component: FlightDashboardComponent,
        ...canActivate(redirectTologin),
      },
      {
        path: 'register',
        component: SignUpComponent,
        ...canActivate(redirectToHome),
      },
      {
        path: 'questions',
        component: FQAComponent,
        ...canActivate(redirectTologin),
      },
      {
        path: 'contact',
        component: ContactComponent,
        ...canActivate(redirectTologin),
      },

      {
        path: '**',
        component: ErrorPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
