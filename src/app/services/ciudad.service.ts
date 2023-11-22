import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCiudades(name: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/ciudades/${name}`);
  }
}
