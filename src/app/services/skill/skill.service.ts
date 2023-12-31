import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../../models/skill';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  public getSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${environment.apiUrl}/skill.php`);
  }

  public createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(`${environment.apiUrl}/skill`, skill);
  }

  public updateSkill(skill: Skill): Observable<Skill> {
    return this.http.put<Skill>(`${environment.apiUrl}/skill`, skill);
  }

  public deleteSkill(skillId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/skill/${skillId}`);
  }
}
