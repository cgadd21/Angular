import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../../models/education';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) { }

  public getEducation(): Observable<Education[]> {
    return this.http.get<Education[]>(`${environment.apiUrl}/education.php`);
  }

  public createEducation(education: Education): Observable<Education> {
    return this.http.post<Education>(`${environment.apiUrl}/education`, education);
  }

  public updateEducation(education: Education): Observable<Education> {
    return this.http.put<Education>(`${environment.apiUrl}/education`, education);
  }

  public deleteEducation(educationId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/education/${educationId}`);
  }
}
