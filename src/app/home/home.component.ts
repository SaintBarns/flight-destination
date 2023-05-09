import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../dashBoard/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // auth: any;

  constructor(
    public authService: AuthenticationService,
    private route: Router
  ) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logout().subscribe(() => {
      this.route.navigate(['/welcome']);
    });
  }
  // login() {
  //   this.authService.logout().subscribe(() => {
  //     this.route.navigate(['/login']);
  //   });
  // }
}
