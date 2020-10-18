import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { DatosUsuarioComponent } from './components/datos-usuario/datos-usuario.component';
=======
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
>>>>>>> login



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    HomeComponent,
<<<<<<< HEAD
    DatosUsuarioComponent
=======
    LoginComponent,
    PrincipalComponent
>>>>>>> login
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
