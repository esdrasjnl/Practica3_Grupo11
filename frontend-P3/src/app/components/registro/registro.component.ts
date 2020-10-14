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

  registrar()
  {

  }
}
