import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }



}
