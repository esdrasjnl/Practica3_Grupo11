import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders}from "@angular/common/http"
import { map, throttleTime } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  
  api = 'http://localhost:4000/api';

  getusuario()
    {
      return this.http.get<any>(`${this.api}/usuario/`);
    }
}
