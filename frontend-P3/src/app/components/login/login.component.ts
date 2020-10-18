import { Component, OnInit } from '@angular/core';
import {LoginService  } from "../../services/login.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public service:LoginService,public router:Router ) { }

  ngOnInit() {
  }

  public error=false;
  respuesta: any = [];

  datos = {
    email:'' ,
    clave:''
  };

  datos1 = {
    user_name:'' ,
    clave:''
  };

  email:string="";
  clave:string="";

  correoCorrecto(correo: string)
  {
    const exp = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(exp.test(correo))
    {
      return true;
    }
    return false;
  }


  verificacion()
  {
    if(this.correoCorrecto(this.email) == true)
    {
      this.datos.email = this.email;
      this.datos.clave = this.clave;
      this.loguear(this.datos);
    }
    else
    {
      this.datos1.user_name = this.email;
      this.datos1.clave = this.clave;
      this.loguear(this.datos1);
    }

  }


  loguear(datos: any)
  {
    this.service.getusuario(datos)
    .subscribe(
      res => {
        if(res != 'No hay resultados')
        {
          this.respuesta = res[0];
          console.log(this.respuesta);
          this.almacenarDatos();
          this.router.navigate(['/principal']);
        }
        else
        {
          alert("USUARIO INCORRECTO, VUELVE A INTENTAR!");
        }
        
      },
      err => alert("USUARIO INCORRECTO, VUELVE A INTENTAR!")
    )
    this.limpiar();
  }

  almacenarDatos()
  {
    localStorage.setItem('username',this.respuesta.user_name);
    localStorage.setItem('nombre',this.respuesta.nombre);
    localStorage.setItem('apellidos',this.respuesta.apellido);
    localStorage.setItem('cui',this.respuesta.CUI);
    localStorage.setItem('clave',this.respuesta.clave);
    localStorage.setItem('edad',this.respuesta.edad);
    localStorage.setItem('correo',this.respuesta.correo);

    var u = localStorage.getItem('cui');

    console.log(u);
  }

  limpiar()
  {
    this.email = '';
    this.clave = '';
  }



}
