import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';
import { use } from 'chai';
import { callbackify } from 'util';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {

  constructor( public router: Router, public service:UsuarioService) { }

  users: any = [];
  cards: any = [];
  cards1: any = [];
  cantidad:string="";
  cantidad1:string="";
  res:string="";
  res2:string="";
  ngOnInit() {
    this.obtenerusuarios();
    this.obtenertarjetas();
    this.obtenerregalos();
    console.log(this.users);

  }
  
  usuarioregalo:number;
  giftcard:string;
  obtenerusuarios() {
    this.service.getusuario()
      .subscribe(
        res => {
          console.log(res);
          this.verificaEstado(res)
        },
        err => console.log(err)
      )
  }

  verificaEstado(res: any) {
    let j = 0;
    for (let i = 0; i < res.length; i++) {

        const usuarios =
        {
          id_usuario: res[i].id_usuario,
          user_name: res[i].user_name,
          correo: res[i].correo,
          clave: res[i].clave,
          nombre: res[i].nombre,
          apellido: res[i].apellido,
          CUI: res[i].CUI,
          edad: res[i].edad,
          ref_id_tipo: res[i].ref_id_tipo
         
        }
        this.users[j] = usuarios;
        j++;
    }
    return this.users;
  }

  guardarusuario(usuario:any){
   this.usuarioregalo=usuario;
   console.log(this.usuarioregalo);
  }

  obtenertarjetas() {
    const id=localStorage.getItem("id_usuario");
    console.log(id);
    this.service.gettarjetas(id)
      .subscribe(
        res => {
          console.log(res);
          this.llenargift(res);
        },
        err => console.log(err)
      )
  }


  llenargift(res: any) {
    let j = 0;
    console.log(res);
    for (let i = 0; i < res.length; i++) {
  
       
        if(res[i].Disponibles>0){
          const card =
          {
            cantidad: res[i].Disponibles,
            image: res[i].image,
            nombreTarjeta: res[i].nombreGC,
            pkgCard: res[i].IdGifCard,
            precio: res[i].precio
          }
          this.cards[j] = card;
          j++;
        }
    
       
    }
    return this.cards;
  }
  

  guardardatos(id:any,cantidadtotal:any){
    
    var y:number=+cantidadtotal;
    var x:number=+this.cantidad;

    const usuarioreceptor=localStorage.getItem("id_usuario");
   // var usuarioreceptor = Number(usu);
    var f = new Date();
    var fecha= f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();
 
    if(x>y){
      alert("NO HAY SUFICIENTES GIFT PARA REGALAR!")
    }else if (x<=0)
    {
      alert("NO SE PUEDE REGALAR UN NUMERO MENOR QUE 1!")
    }else{  
       this.agregar(fecha,this.usuarioregalo+"",usuarioreceptor,this.cantidad,id);
      }
   /* console.log(f.toLocaleDateString());
    console.log(f.getFullYear());
    console.log(f.getDate());
    console.log(f.getMonth());
    console.log(fecha);
    console.log(this.usuarioregalo);
    console.log(usuarioreceptor);
    console.log(this.cantidad);
    console.log(id);*/

   }
 
   agregar(fecha,emisor,receptor,cantidad,idtarjeta) {
    const datos={
      "fechaRegalo":fecha,
      "usuarioEmisor":emisor,
      "usuarioReceptor":receptor
  }
    this.service.enviardatos(datos)
      .subscribe(
        res => {
          console.log(res);
          if(res.estado=="true"){
            this.detalle(idtarjeta,receptor,cantidad);
          }else{
            alert("NO SE PUDO REALIZAR EL REGALO !")
          }
        },
        err => console.log(err)
      )
      this.limpiar();
  }


  detalle(tarjeta,emisor,cantidad) {
    const datos={
      "usuarioEmisor":emisor,
      "cantidad":cantidad,
      "pkgRCard":tarjeta
  }
  
    this.service.enviardetalle(datos)
      .subscribe(
        res => {
          if(res.estado=="true"){
            alert("REGALO ENVIADO!")
          }else{
            alert("NO SE PUDO REALIZAR EL REGALO!")
          }
        },
        err => console.log(err)
      )
      this.limpiar();
  }

  limpiar(){
    this.cantidad="";
    this.res="";
    this.res2="";
    this.usuarioregalo=null;
  }



  obtenerregalos() {
    const id=localStorage.getItem("id_usuario");
    console.log(id);
    this.service.getregalos(id)
      .subscribe(
        res => {
          console.log(res);
          this.llenargift1(res);
        },
        err => console.log(err)
      )
  }

  llenargift1(res: any) {
    let j = 0;
    for (let i = 0; i < res.length; i++) {
      if(res[i].cantidad>0){
        const card =
        {
          cantidad: res[i].cantidad,
          image: res[i].image,
          nombreTarjeta: res[i].nombre,
          fecha: res[i].fechaRegalo
        }
        this.cards1[j] = card;
        j++;
      }
    }
    return this.cards1;
  }
  
  Validarcantidad():boolean
  {
    if(+this.cantidad>0)
    {
      return true;
    }
    return false;
  }

  Validarusuarioreceptor():boolean
  {
    if(+this.usuarioregalo>0)
    {
      return true;
    }
    return false;
  }

  Validardatosregalo(datos1:any):boolean{
    const fecha = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/;
    const id = /^[0-9]+$/;
  if(fecha.test(datos1.fechaRegalo+"")&&id.test(datos1.usuarioEmisor+"")&&id.test(datos1.usuarioReceptor+""))
    {
      return true;
    }
    return false;
  }

  Validardatostarjetaregalada(datos1:any):boolean{
    const numero = /^[0-9]+$/;

  if(numero.test(datos1.usuarioEmisor+"")&&numero.test(datos1.cantidad+"")&&numero.test(datos1.pkgRCard+""))
    {
      return true;
    }
    return false;
  }
}
