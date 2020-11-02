import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegaloComponent } from './regalo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('RegaloComponent', () => {
  let component: RegaloComponent;
  let fixture: ComponentFixture<RegaloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ RegaloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegaloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('TDD PARA CANTIDAD', () => {
    it('Comprobacion de CANTIDAD > 0', function () {
      component.cantidad="10";
      expect(component.Validarcantidad()).toBeTruthy();
    });

    it('Comprobacion de cantidad =0 incorrecto', function () {
      component.cantidad="0";
      expect(component.Validarcantidad()).toBeFalsy();
    });

    it('Comprobacion Cantidad vacia', function () {
      component.cantidad="";
      expect(component.Validarcantidad()).toBeFalsy();
    });

    it('Comprobacion Cantidad nulla', function () {
      component.cantidad=null;
      expect(component.Validarcantidad()).toBeFalsy();
    });

  });



  describe('TDD PARA IDUSUARIO RECEPTOR', () => {
    it('Comprobacion de USUARIO >= 0', function () {
      component.usuarioregalo=5;
      expect(component.Validarusuarioreceptor()).toBeTruthy();
    });

    it('Comprobacion de usuario <0 incorrecto', function () {
      component.usuarioregalo=-1;
      expect(component.Validarusuarioreceptor()).toBeFalsy();
    });

    it('Comprobacion usuario nulo', function () {
      component.usuarioregalo=null;
      expect(component.Validarusuarioreceptor()).toBeFalsy();
    });

  });




  describe('MOCKS PARA DATOS REGALO CORRECTO', () => {
    it('Mock para comprobar array de regalo  sea correcto', function () {

      var s = new RegaloComponent( component.router,component.service);
      spyOn(s, 'Validardatosregalo').and.callThrough();
      const datos={
        "fechaRegalo":'2020-10-11',
        "usuarioEmisor":'3',
        "usuarioReceptor":'2'
    }
      var result = component.Validardatosregalo(datos);
      expect(result).toBeTruthy();
    });

    it('Mock para comprobar array de regalo  sea incorrecto', function () {

      var s = new RegaloComponent( component.router,component.service);
      spyOn(s, 'Validardatosregalo').and.callThrough();
      const datos={
        "fechaRegalo":'2020-10',
        "usuarioEmisor":'3',
        "usuarioReceptor":'2'
    }
      var result = component.Validardatosregalo(datos);
      expect(result).toBeFalsy();
    });
  });

  describe('MOCKS PARA DATOS TARJETAS REGALADAS CORRECTO', () => {
    it('Mock para comprobar array de tarjeta regalada  sea correcto', function () {

      var s = new RegaloComponent( component.router,component.service);
      spyOn(s, 'Validardatosregalo').and.callThrough();
      const datos={
        "usuarioEmisor":"5",
        "cantidad":"10",
        "pkgRCard":"1"      
    }
      var result = component.Validardatostarjetaregalada(datos);
      expect(result).toBeTruthy();
    });

    it('Mock para comprobar array de tarjetas regaladas sea incorrecto', function () {

      var s = new RegaloComponent( component.router,component.service);
      spyOn(s, 'Validardatosregalo').and.callThrough();
      const datos={
        "usuarioEmisor":"hola",
        "cantidad":"10",
        "pkgRCard":"1"
      
    }
      var result = component.Validardatostarjetaregalada(datos);
      expect(result).toBeFalsy();
    });
  });

});
