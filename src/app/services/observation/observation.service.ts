import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observation } from '../../models/observation';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http: HttpClient) { }

  public getObservation(): Observable<Observation[]> {
    return this.http.get<Observation[]>(`${environment.apiUrl}/observation`);
  }
}
