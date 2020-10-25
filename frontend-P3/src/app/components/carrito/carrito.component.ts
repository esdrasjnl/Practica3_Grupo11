import { Component, OnInit } from '@angular/core';
import { CompraService } from "../../services/compra.service"
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(public service: CompraService, public router: Router) { }
  p:any=[];
  user_string : string =localStorage.getItem('Compras');
  Datos: any =JSON.parse(this.user_string);

  ngOnInit() {
   //this.rutaActiva.snapshot.params
    //console.log(this.rutaActiva.snapshot.params.card);
    //console.log(this.rutaActiva.snapshot.params.precio);
    console.log(this.Datos);
    this.obtenerTasa();
    this.PagoTotal();
  }

  tasa:any;
  obtenerTasa() {
    this.service.getTasaCambio()
      .subscribe(
        res => {
          this.tasa = res[0].total;
          return this.tasa;
        },
        err => console.log(err)
      )
  }
  
  total = 0;
  total1 = 0;
  PagoTotal()
  {
    for (let i = 0; i < this.Datos.length; i++) {
      this.total += ((this.Datos[i].precio * this.Datos[i].repite) * this.Datos[i].chargeRate) + (this.Datos[i].precio * this.Datos[i].repite);
    }

  }


}
