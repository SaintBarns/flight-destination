import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  user$ = this.AuthService.currentUser$;

  constructor(private AuthService: AuthenticationService) {}

  ngOnInit(): void {}
}
