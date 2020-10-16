import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';



describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Verifica que los valores iniciales esten vacios', () => {
    it('Se hace prueba verificando que los valores esten vacios', function () {
      const datos = {
        email: '',
        clave: ''
      };
      var s = new LoginComponent(component.service, component.router);
      expect(component.datos).toEqual(datos);

    });

    it('Se hace prueba verificando que los valores iniciales no contengan datos', function () {
      const datos = {
        email: 'ejemplo@gmail.com',
        clave: ''
      };
      var s = new LoginComponent(component.service, component.router);
      expect(component.datos).not.toEqual(datos);

    });

  });

  describe('TDD PARA VERIFICAR CORREO CORRECTO EN LOGIN', () => {
    it('Comprobacion de correo correcto Login', function () {
      expect(component.correoCorrecto('eje_mplo@gmail.com')).toBeTruthy();
    });

    it('Comprobacion de correo incorrecto Login', function () {
      expect(component.correoCorrecto('ejemplogmail.com')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto Login', function () {
      expect(component.correoCorrecto('ejemplo@gmailcom')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto Login', function () {
      expect(component.correoCorrecto('')).toBeFalsy();
    });

  });

  describe('TDD PARA VERIFICAR QUE EL METODO DE LOGUEAR FUNCIONA', () => {
    it('Comprobacion que el metodo de login funcione', function () {
      expect(component.loguear()).toBeFalsy();
    });

  });

});
