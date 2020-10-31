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
  p: any = [];
  user_string: string = localStorage.getItem('Compras');
  Datos: any;
  tarjeta:string="";
  nombre:string="";
  fecha:string="";
  cvv:string="";
  totalp:string="";

  ngOnInit() {
    this.inicio();
    this.obtenerTasa();
    this.PagoTotal();
  }

  inicio() {
    if (this.user_string != '') {
      this.Datos = JSON.parse(this.user_string);
      console.log(this.Datos);
    }
  }
  tasa: any;
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
  PagoTotal() {
   
    console.log(this.Datos);
    if (this.user_string != '') {
      for (let i = 0; i < this.Datos.length; i++) {
        this.total += ((this.Datos[i].precio * this.Datos[i].repite) * this.Datos[i].chargeRate) + (this.Datos[i].precio * this.Datos[i].repite);
      }
    }
 
   console.log(this.total);
   //console.log(Datos1);
    if(this.total>0){
     return true;
    }else{
      return false;
    }


    
  }


  tarjetacorrecta(tarjeta: string):boolean
  {
    if(tarjeta.length == 16)
    {
      return true;
    }
    return false;
  }

  cvvcorrecto(cvv: string):boolean
  {
    if(cvv.length == 3)
    {
      return true;
    }
    return false;
  }
  
  nombreusuario(nombre: string):boolean
  {
    if(nombre!="")
    {
      return true;
    }
    return false;
  }

  realizarPago()
  {
    console.log(this.totalp);
  }
}
