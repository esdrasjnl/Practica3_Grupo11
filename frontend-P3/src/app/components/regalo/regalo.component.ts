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
  cantidad:string="";
  ngOnInit() {
    this.obtenerusuarios();
    this.obtenertarjetas();
    console.log(this.users);

  }
  
  usuarioregalo:string;
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
    for (let i = 0; i < res.length; i++) {

        const card =
        {
          cantidad: res[i].cantidad,
          image: res[i].image,
          nombreTarjeta: res[i].nombre,
          pkgCard: res[i].pkgCard,
          subtotal:res[i].subtotal
        }
        this.cards[j] = card;
        j++;
    }
    return this.cards;
  }
  

  guardardatos(id:any,cantidadtotal:any){
    
    const usuarioreceptor=localStorage.getItem("id_usuario");
    
    var f = new Date();
    var fecha= f.getFullYear()+"-"+(f.getMonth()+1)+"-"+f.getDate();
    console.log(f.toLocaleDateString());

    console.log(f.getFullYear());
    console.log(f.getDate());
    console.log(f.getMonth());

    console.log(fecha);
    console.log(this.usuarioregalo);
    console.log(usuarioreceptor);
    console.log(this.cantidad);
    console.log(id);
   }
 

}
