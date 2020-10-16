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

  datos = {
    email:'' ,
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

}
