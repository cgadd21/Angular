import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project/project.service';
import { Project } from '../../models/project';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [ProjectService],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {
  public projects: Project[] = [];

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProject();
  }

  public getProject(): void {
    this.projectService.getProject().subscribe({
      next: (response: Project[]) => {
        this.projects = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }
}
