import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  api = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getusuario(usuario)
  {
    console.log(usuario);
    return this.http.post<any>(`${this.api}/usuario/login`,usuario);
  }
}