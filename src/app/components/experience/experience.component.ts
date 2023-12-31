import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience/experience.service';
import { Experience } from '../../models/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ExperienceService],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  public experience: Experience[] = [];

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperience();
  }

  public getExperience(): void {
    this.experienceService.getExperience().subscribe({
      next: (response: Experience[]) => {
        this.experience = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
