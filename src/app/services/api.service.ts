import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }


  callApiHandler(){
    this.http.get('http://demo.ANGULARarchitects.io/api/flight').subscribe((res)=>{
      console.log(res);
    },
    )

  }
}
