import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../../models/experience';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor(private http: HttpClient) { }

  public getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${environment.apiUrl}/experience`);
  }

  public createExperience(experience: Experience): Observable<Experience> {
    return this.http.post<Experience>(`${environment.apiUrl}/experience`, experience);
  }

  public updateExperience(experience: Experience): Observable<Experience> {
    return this.http.put<Experience>(`${environment.apiUrl}/experience`, experience);
  }

  public deleteExperience(experienceId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/experience/${experienceId}`);
  }
}
