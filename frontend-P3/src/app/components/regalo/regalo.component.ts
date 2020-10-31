import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Router } from '@angular/router';
import { use } from 'chai';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent implements OnInit {

  constructor( public router: Router, public service:UsuarioService) { }

  users: any = [];
  ngOnInit() {
    this.obtenerusuarios();
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



}
