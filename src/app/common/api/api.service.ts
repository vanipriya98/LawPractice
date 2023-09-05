import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get(){
    // return this.httpClient.get()
  }

  post(){
// return this.httpClient.post()
  }
}
