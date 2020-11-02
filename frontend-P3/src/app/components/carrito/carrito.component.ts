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
  tarjetas: any = [];

  dato = {
    pkUser: '',
    numeroTarjeta: '',
    nombreTarjeta: '',
    fechaExpTarjeta: '',
    codigoVeriTarjeta: '',
    montoTotal: '',
    moneda: ''
  };

  

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
    if(this.cvvcorrecto(this.cvv) == true && this.tarjetacorrecta(this.tarjeta) == true && this.total > 0)
    {
      this.dato.pkUser = localStorage.getItem('id');
      this.dato.numeroTarjeta = this.tarjeta;
      this.dato.nombreTarjeta = this.nombre;
      this.dato.fechaExpTarjeta = this.fecha;
      this.dato.codigoVeriTarjeta = this.cvv;
      

      if(this.totalp == "Q")
      {
        this.dato.moneda = "Quetzales";
        var t = this.total * this.tasa;
        this.dato.montoTotal = (Math.round((t + Number.EPSILON) * 100) / 100).toString();
      }
      else{
        this.dato.moneda = "Dolares";
        this.dato.montoTotal = (Math.round((this.total + Number.EPSILON) * 100) / 100).toString();
      }
      
      this.service.postPago(this.dato)
      .subscribe(
        res => {
          console.log(res);
          if(res.estado == "true")
          {
            alert("SE REALIZO EL PAGO EXITOSAMENTE");
            this.Gift();
          }
          else
          {
            alert("NO SE PUDO REALIZAR EL PAGO");
          }
        },
        err => {
          console.log(err);
          alert("NO SE PUEDE REALIZAR EL PAGO");}
      )
      this.limpiar();
    }
    else if(this.total <= 0)
    {
      alert("NO HA SELECCIONADO NINGUNA GIFTCARD");
      this.limpiar();
    }
    
  }

  Gift()
  {
    for (let i = 0; i < this.Datos.length; i++) {
      const dato1 = {
        nombreGifCard: '',
        imagenGC: '',
        precio: '',
        Estado: 'Activo',
        subtotal: '',
        cantidad: '',
        pkUser: '',
        recargo: ''
      };
      
      dato1.nombreGifCard = this.Datos[i].name;
      dato1.imagenGC = this.Datos[i].image;
      dato1.precio = this.Datos[i].precio;
      dato1.cantidad = this.Datos[i].repite;
      dato1.pkUser = localStorage.getItem('id');
      dato1.recargo = this.Datos[i].chargeRate.toString();
      dato1.subtotal = (this.Datos[i].precio * this.Datos[i].repite).toString();

      this.tarjetas.push(dato1);
    }

    console.log(this.tarjetas);
    this.postGift();

  }

  postGift()
  {
    for (let i = 0; i < this.tarjetas.length; i++) {
      this.service.postGift(this.tarjetas[i])
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      )
    }
    this.tarjetas =  [];
    
  }


  limpiar()
  {
    this.tarjeta="";
    this.nombre="";
    this.fecha="";
    this.cvv="";
    this.totalp="";
  }
}

