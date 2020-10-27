import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.setItem('username','');
    localStorage.setItem('nombre','');
    localStorage.setItem('apellidos','');
    localStorage.setItem('cui','');
    localStorage.setItem('clave','');
    localStorage.setItem('edad','');
    localStorage.setItem('correo','');
    localStorage.setItem('Compras','');
  }

}
