import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ciudad } from '../models/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:3000';
  ciudades: Ciudad[] | undefined;

  constructor(private http: HttpClient) {}

  getCiudades(name: string): Observable<Ciudad[]> {
      return this.http.get<any>(`${this.apiUrl}/ciudad/${name}`).subscribe(data => {
        this.ciudades = data.data;
      });
  }
}
