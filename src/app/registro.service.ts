import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRegistros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/registro`);
  }
}

