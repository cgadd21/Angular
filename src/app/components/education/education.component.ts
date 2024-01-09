import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education/education.service';
import { Education } from '../../models/education';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [EducationService],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  public educations: Education[] = [];

  constructor(private educationService: EducationService) { }

  ngOnInit(): void {
    this.getEducation();
  }

  public getEducation(): void {
    this.educationService.getEducation().subscribe({
      next: (response: Education[]) => {
        this.educations = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }
}
