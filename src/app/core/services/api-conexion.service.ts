import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiConexionService {
  private apiUrl = environment.apiUrl + "/invoices/";

  constructor(private http: HttpClient) { }

  getInfo(startDate: string, endDate: string): Observable<any> {
    const httpHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const body = { 
      "StartDate": startDate, 
      "EndDate": endDate 
    };

    return this.http.post<any>(this.apiUrl, body, httpHeaders);
  }
}
