import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { RegistroComponent } from './components/registro/registro.component';
import {CompraComponent} from "./components/compra/compra.component";
import {CarritoComponent} from "./components/carrito/carrito.component";
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
import { LoginComponent } from './components/login/login.component';
import {PrincipalComponent} from './components/principal/principal.component'
import {RegaloComponent} from './components/regalo/regalo.component'


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path: 'registro',
    component: RegistroComponent

  }, 
  {
    path: 'perfil',
    component: DatosUsuarioComponent

  },
  {
    path: 'compra',
    component: CompraComponent
  } ,
  {
    path: 'carrito', 
    component: CarritoComponent
  }
  ,
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'principal',
    component: PrincipalComponent
  }
  ,  
  {
    path: 'regalo',
    component: RegaloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


