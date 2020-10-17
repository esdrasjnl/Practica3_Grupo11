import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import { RegistroComponent } from './components/registro/registro.component';
import {CompraComponent} from "./components/compra/compra.component";


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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


