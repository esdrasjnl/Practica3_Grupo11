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

  ngOnInit() {
    this.obtenerTarjetas();
  }

  verificaEstado(res: any) {
    console.log(res);
    let j = 0;
    for (let i = 0; i < res.length; i++) {
      if (res[i].active == true) {
        this.cards[j] = res[i];
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

}
