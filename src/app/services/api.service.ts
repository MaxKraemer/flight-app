import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  callApiHandler(): Observable<any> {
    return this.http.get('http://demo.ANGULARarchitects.io/api/flight');
  }
}
