import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../dashBoard/services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
