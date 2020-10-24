import { Component, OnInit } from '@angular/core';
import {RegistroService } from "../../services/registro.service";

import { Router } from '@angular/router';
@Component({
  selector: 'app-datos-usuario',
  templateUrl: './datos-usuario.component.html',
  styleUrls: ['./datos-usuario.component.css']
})
export class DatosUsuarioComponent implements OnInit {

  constructor(    public service: RegistroService, public router: Router
    ) { }

  ngOnInit() {
    this.llenarCampos();
  }

  
  username: string = "";
  correo: string = "";
  clave: string = "";
  nombre: string ="";
  apellidos: string ="";
  cui: string = "";
  edad: string="0";
  edadn:number;

  error = false;


   datos = {
    id_usuario: '',
    user_name: '',
    correo: '',
    clave: '',
    nombre: '',
    apellido: '',
    cui: '',
    edad: '',
    ref_id_tipo: 1
  };


  usuario = {
    correo: ''
  };

  userNameCorrecto(username: string)
  {
    if(username=="")
    {
      return 'username correcto'
    }
    
    return 'username incorrecto';
  }

  NombreCorrecto(nombre: string)
  {
    if(nombre=="")
    {
      return 'nombre correcto'
    }
    
    return 'nombre incorrecto';
  }
ApellidosCorrecto(apellidos: string)
  {
    if(apellidos=="")
    {
      return 'apellido correcto'
    }
    
    return 'apellido incorrecto';
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

  edadCorrecto(edad: string)
  {
    
    if(Number(edad))
    {
      return true;
    }
    
    return false;
  }


  llenarCampos()
  {
    this.username = localStorage.getItem('username');
    this.nombre = localStorage.getItem('nombre');
    this.apellidos = localStorage.getItem('apellidos');
    this.cui = localStorage.getItem('cui');
    this.clave = localStorage.getItem('clave');
    this.edad = localStorage.getItem('edad');
    this.correo = localStorage.getItem('correo');

  }
}
