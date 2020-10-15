import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Prueba Registro', () => {
    it('Realizar prueba', function () {
      const datos = {
        username: '',
        correo: '',
        clave: '',
        nombre: '',
        apellido: '',
        cui: '',
        edad: '',
        ref_id_tipo: 1
      };

      var s = new RegistroComponent(component.service, component.router);
      
      component.registrar;
      expect(component.error).toBeFalsy;
      expect(component.datos).toEqual(datos);

    });

  });

  describe('TDD PARA CUI', () => {
    it('Comprobacion de CUI correcto', function () {
      expect(component.dpiCorrecto('1234567891023')).toBeTruthy();
    });

    it('Comprobacion de CUI incorrecto', function () {
      expect(component.dpiCorrecto('123456789102')).toBeFalsy();
    });

    it('Comprobacion de CUI vacio', function () {
      expect(component.dpiCorrecto('')).toBeFalsy();
    });

  });

  describe('TDD PARA USERNAME', () => {
    it('Comprobacion de username correcto', function () {
      expect(component.userNameCorrecto('ejemplo_12')).toContain('Cumple con el rango');
    });

    it('Comprobacion de username no correcto', function () {
      expect(component.userNameCorrecto('ejemplo1234567890')).toContain('No cumple con el rango');
    });
  });

  describe('TDD PARA CORREO', () => {
    it('Comprobacion de correo correcto', function () {
      expect(component.correoCorrecto('eje_mplo@gmail.com')).toBeTruthy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('ejemplogmail.com')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('ejemplo@gmailcom')).toBeFalsy();
    });

    it('Comprobacion de correo incorrecto', function () {
      expect(component.correoCorrecto('')).toBeFalsy();
    });

  });

  describe('TDD PARA METODO REGISTRAR', () => {

    it('Comprobacion de metodo registrar no se envia ningun dato', function () {
      expect(component.registrar()).toBeFalsy();
    });


  });

});

