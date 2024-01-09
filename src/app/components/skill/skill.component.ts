import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill';
import { SkillService } from '../../services/skill/skill.service';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [SkillService],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements OnInit {
  public skills: Skill[] = [];
  public filteredSkills: Skill[] = [];

  constructor(private skillService: SkillService) { }

  ngOnInit(): void {
      this.getSkill();
  }

  public getSkill(): void {
    this.skillService.getSkill().subscribe({
      next: (response: Skill[]) => {
        this.skills = response;
        this.filteredSkills = this.skills;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    })
  }

  public getUniqueCategories(): string[] {
    return [...new Set(this.skills.map(skill => skill.category))];
  }

  public filterSkillsByCategory(category: string): void {
    this.filteredSkills = this.skills.filter(skill => skill.category === category);
  }
}
