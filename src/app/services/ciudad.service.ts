import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCiudades(name: string): Observable<Ciudad[]> {
    return this.http.get<{data: Ciudad[]}>(`${this.apiUrl}/ciudad/${name}`).pipe(
      map((response: { data: any; }) => response.data)
    );
  }
}
