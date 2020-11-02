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

    gettarjetas(id)
    {
      return this.http.get<any>(`${this.api}/regalo/${id}`);
    }

    enviardatos(datos:any){
      console.log(datos);
      return this.http.post<any>(`${this.api}/regalo/agregar`,datos);
    }
    enviardetalle(detalle:any){
      console.log(detalle);
      return this.http.post<any>(`${this.api}/regalo/agregar/detalle`,detalle);
    }
    getregalos(id)
    {
      return this.http.get<any>(`${this.api}/regalo/receptor/${id}`);
    }


}
