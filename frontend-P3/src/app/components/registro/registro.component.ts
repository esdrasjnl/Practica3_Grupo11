import { Component, OnInit } from '@angular/core';
import { RegistroService } from "../../services/registro.service";

import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(
    public service: RegistroService, public router: Router
  ) { }

  ngOnInit() {
  }

  datos = {
    username: '',
    correo: '',
    clave: '',
    nombre: '',
    apellidos: '',
    cui: '',
    edad: '',
    id_tipo: 1
  };

  error = false;

  username: string = "";
  correo: string = "";
  clave: string = "";
  nombre: string = "";
  apellidos: string = "";
  cui: string = "";
  edad: number;
  id_tipo:number;

  userNameCorrecto(username: string)
  {
    if(username.length >= 4 && username.length <=15)
    {
      return 'Cumple con el rango'
    }
    
    return 'No cumple con el rango';
  }

  
  dpiCorrecto(cui: string):boolean
  {
    if(cui.length == 13)
    {
      return true;
    }
    return false;
  }

  correoCorrecto(correo: string)
  {
    const exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(exp.test(correo))
    {
      return true;
    }
    return false;
  }


  registrar()
  {

  }
}
