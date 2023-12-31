import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${environment.apiUrl}/project.php`)
  }

  public createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(`${environment.apiUrl}/project`, project);
  }

  public updateProject(project: Project): Observable<Project> {
    return this.http.put<Project>(`${environment.apiUrl}/project`, project);
  }

  public deleteProject(projectId: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/project/${projectId}`);
  }
}
