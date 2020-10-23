import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import { RegistroComponent } from './components/registro/registro.component';
import {CompraComponent} from "./components/compra/compra.component";
import {CarritoComponent} from "./components/carrito/carrito.component";


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
    path: 'compra',
    component: CompraComponent
  } ,
  {
    path: 'carrito', 
    component: CarritoComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


