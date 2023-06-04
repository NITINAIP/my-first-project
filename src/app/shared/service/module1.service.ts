import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env'


@Injectable({
  providedIn: 'root'
})
export class Module1Service {

  constructor(
    private http:HttpClient
  ) { }

  get(){
    return this.http.post(`${environment.apiUrl}/api/v1/masterdata/getall`,{})
  }
  
}
