import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ObservationService } from '../../services/observation/observation.service';
import { Observation } from '../../models/observation';

@Component({
  selector: 'app-observation',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ObservationService],
  templateUrl: './observation.component.html',
  styleUrl: './observation.component.css'
})
export class ObservationComponent implements OnInit {
  public observations: Observation[] = [];

  constructor(private observationService: ObservationService) { }

  ngOnInit(): void {
    this.getObservation();
  }

  public getObservation(): void {
    this.observationService.getObservation().subscribe({
      next: (reponse: Observation[]) => {
        this.observations = reponse;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  calculateWindDirection(degree: number): string {
    const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return directions[Math.round(degree / 22.5) % 16];
  }
}
