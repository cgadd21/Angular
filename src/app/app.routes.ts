import { Routes } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ObservationComponent } from './components/observation/observation.component';
import { ProjectComponent } from './components/project/project.component';
import { SkillComponent } from './components/skill/skill.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path : '', component: HomeComponent, title: 'Home'},
    {path : 'education', component: EducationComponent, title: 'Education'},
    {path : 'experience', component: ExperienceComponent, title: 'Experience'},
    {path : 'observation', component: ObservationComponent, title: 'Observation'},
    {path : 'projects', component: ProjectComponent, title: 'Projects'},
    {path : 'skills', component: SkillComponent, title: 'Skills'},
    {path : 'volunteer', component: VolunteerComponent, title: 'Volunteer'},
];
