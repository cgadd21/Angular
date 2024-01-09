import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Volunteer } from '../../models/volunteer';
import { VolunteerService } from '../../services/volunteer/volunteer.service';

@Component({
  selector: 'app-volunteer',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [VolunteerService],
  templateUrl: './volunteer.component.html',
  styleUrl: './volunteer.component.css'
})
export class VolunteerComponent implements OnInit {
  public volunteers: Volunteer[] = [];

  constructor(private volunteerService: VolunteerService) { }

  ngOnInit(): void {
    this.getVolunteer();
  }

  public getVolunteer(): void {
    this.volunteerService.getVolunteer().subscribe({
      next: (reponse: Volunteer[]) => {
        this.volunteers = reponse;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
