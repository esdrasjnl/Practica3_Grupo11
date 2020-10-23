import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.rutaActiva.snapshot.params
    console.log(this.rutaActiva.snapshot.params.card);
    console.log(this.rutaActiva.snapshot.params.precio);
  }

}
