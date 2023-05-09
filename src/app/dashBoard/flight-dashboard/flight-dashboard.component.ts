import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { EMPTY, catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-flight-dashboard',
  templateUrl: './flight-dashboard.component.html',
  styleUrls: ['./flight-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightDashboardComponent {
  errorMessage = '';

  States$ = this.dashboardService.States$.pipe(
      catchError(err => {
        this.errorMessage = err;
        return EMPTY
      }));

  constructor(private dashboardService: DashboardService) {}

}


