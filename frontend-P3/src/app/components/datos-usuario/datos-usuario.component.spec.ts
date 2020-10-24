import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosUsuarioComponent } from './datos-usuario.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';


describe('DatosUsuarioComponent', () => {
  let component: DatosUsuarioComponent;
  let fixture: ComponentFixture<DatosUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [DatosUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  describe('Ver Perfil', () => {
    it('Realizar Ver perfil', function () {
      const usuario = {
        correo: ''
      };

      expect(component.error).toBeFalsy;
      expect(component.usuario).toEqual(usuario);

    });

  });

  describe('Prueba Perfil', () => {
    it('Realizar prueba perfil', function () {
      const datos = {
        id_usuario: '',
        user_name: '',
        correo: '',
        clave: '',
        nombre: '',
        apellido: '',
        cui: '',
        edad: '',
        ref_id_tipo: 1
      };

      var s = new DatosUsuarioComponent(component.service, component.router);
      
      component.llenarCampos;
      expect(component.error).toBeFalsy;
      expect(component.datos).toEqual(datos);

    });

  });



  describe('TDD PARA METODO LLENAR CAMPOS', () => {

    it('Comprobacion de metodo llenarcampos no devuelve ningun campo', function () {
      expect(component.llenarCampos()).toBeFalsy();
    });


  });
  describe('TDD PARA NOMBRE', () => {
    it(' nombre correcto', function () {
      expect(component.NombreCorrecto('')).toContain('nombre correcto');
    });

    it('nombre incorrecto', function () {
      expect(component.NombreCorrecto('wendy')).toContain('nombre incorrecto');
    });

   

  });

  describe('TDD PARA APELLIDO', () => {
    it(' apellido correcto', function () {
      expect(component.ApellidosCorrecto('')).toContain('apellido correcto');
    });

    it('apellido incorrecto', function () {
      expect(component.ApellidosCorrecto('Garcia')).toContain('apellido incorrecto')
    });

   

  });
  describe('TDD PARA USERNAME', () => {
    it('username correcto', function () {
      expect(component.userNameCorrecto('')).toContain('username correcto');
    });

    it('username no correcto', function () {
      expect(component.userNameCorrecto('usuario')).toContain('username incorrecto');
    });
  });

  

  describe('TDD PARA CUI', () => {
    it('CUI correcto', function () {
      expect(component.dpiCorrecto('2282383840101')).toBeTruthy();
    });

    it(' CUI incorrecto', function () {
      expect(component.dpiCorrecto('228238384010190')).toBeFalsy();
    });

  });

  describe('TDD PARA EDAD', () => {
    it('EDAD correcto', function () {
      expect(component.edadCorrecto('10')).toBeTruthy();
    });

    it(' EDAD incorrecto', function () {
      expect(component.edadCorrecto('nu')).toBeFalsy();
    });

  });


  describe('MOCKS PARA VERIFICAR CUI', () => {
    it('VERIFICA CUI CORRECTO', function () {
      var s = new DatosUsuarioComponent(component.service, component.router);
      spyOn(s, 'dpiCorrecto').and.callThrough();
      var result = component.dpiCorrecto('1234567891012');
      expect(result).toBeTruthy();
    });

    it('VERIFICA CUI CORRECTO', function () {
      var s = new DatosUsuarioComponent(component.service, component.router);
      spyOn(s, 'dpiCorrecto').and.callThrough();
      var result = component.dpiCorrecto('123456789101');
      expect(result).toBeFalsy();
    });

  });

  
  

 

});
