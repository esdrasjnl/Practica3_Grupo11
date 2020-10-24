import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import { RegistroComponent } from './components/registro/registro.component';

import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';


import { LoginComponent } from './components/login/login.component';
import {PrincipalComponent} from './components/principal/principal.component'


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
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


