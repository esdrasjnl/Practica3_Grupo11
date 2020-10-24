import { Component, OnInit } from '@angular/core';
import { CompraService } from "../../services/compra.service"
import { Router } from '@angular/router';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor(public service: CompraService, public router: Router) { }

  cards: any = [];
  error = false;
  precio: any = [];


  compras: any = [];
  ngOnInit() {
    this.obtenerPrecio();
  }

  verificaEstado(res: any) {
    let j = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i].active == true) {
        const tarjeta =
        {
          id: res[i].id,
          name: res[i].name,
          image: res[i].image,
          chargeRate: res[i].chargeRate,
          active: res[i].active,
          availability: '',
        }
        for (let a = 0; a < res[i].availability.length; a++) {
          for (let p = 0; p < this.precio.length; p++) {
            if (res[i].availability[a] == this.precio[p].id) {
              res[i].availability[a] = this.precio[p].total;
            }
          }
        }

        tarjeta.availability = res[i].availability;
        this.cards[j] = tarjeta;
        j++;
      }

    }
    return this.cards;
  }


  obtenerTarjetas() {
    this.service.getTarjetas()

      .subscribe(
        res => {
          this.verificaEstado(res);
          this.error = false
        },
        err => this.error = true
      )
  }

  obtenerPrecio() {
    this.service.getPrecio()
      .subscribe(
        res => {
          this.precio = res;
          this.obtenerTarjetas();
        },
        err => console.log(err)
      )
  }

  p: any = [];
  total = 0;
  enviardatos(nombre, imagen, recargo, precio) {
    var bandera = 1;
    this.total = this.total + Number(precio);

    for (let i = 0; i < this.p.length; i++) {
      if (this.p[i].name == nombre && this.p[i].precio == precio) {
        console.log("entro");
        this.p[i].repite += 1;
        this.service.setdatos(this.p);
        bandera = 2;
        break;
      }
    }
    if(bandera == 1)
    {
      this.p.push({ precio: precio, name: nombre, image: imagen, chargeRate: recargo, repite: 1 });
      this.service.setdatos(this.p);
    }

  }
  comprar() {
    this.router.navigate(['carrito']);
  }
}
