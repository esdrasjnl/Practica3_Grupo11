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
    apellido: '',
    cui: '',
    edad: '',
    ref_id_tipo: 1
  };

  error = false;

  username: string = "";
  correo: string = "";
  clave: string = "";
  nombre: string = "";
  apellidos: string = "";
  cui: string = "";
  edad: string;
  id_tipo:number=1;

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


  registrar() {

    this.datos.username = this.username;
    this.datos.nombre = this.nombre;
    this.datos.apellido = this.apellidos;
    this.datos.cui = this.cui;
    this.datos.clave = this.clave;
    this.datos.edad=this.edad;
    this.datos.correo=this.correo;
    this.datos.ref_id_tipo=this.id_tipo;


    console.log(this.datos);

    this.service.postRegistro(this.datos)
      .subscribe(
        res => {
          if (res!== "") {
            alert("USUARIO REGISTRADO EXITOSAMENTE!");
          }
          else {
            alert("USUARIO NO SE PUEDE REGISTRAR, VUELVA A INTENTARLO!");
            this.error = false;
          }
          this.limpiar();
        },
        err => this.error = true
      )
  }

  limpiar() {
    this.clave = '';
    this.edad = '';
    this.nombre = '';
    this.apellidos = '';
    this.cui = '';
    this.clave = '';
  }



  
}
