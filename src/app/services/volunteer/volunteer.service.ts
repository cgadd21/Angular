import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Volunteer } from '../../models/volunteer';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http: HttpClient) { }

  public getVolunteer(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(`${environment.apiUrl}/volunteer.php`);
  }

  public createVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.post<Volunteer>(`${environment.apiUrl}/volunteer`, volunteer);
  }

  public updateVolunteer(volunteer: Volunteer): Observable<Volunteer> {
    return this.http.put<Volunteer>(`${environment.apiUrl}/volunteer`, volunteer);
  }

  public deleteVolunteer(volunteerId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/volunteer/${volunteerId}`);
  }
}
