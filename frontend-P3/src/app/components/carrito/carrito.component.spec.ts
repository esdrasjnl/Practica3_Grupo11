import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoComponent } from './carrito.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CarritoComponent', () => {
  let component: CarritoComponent;
  let fixture: ComponentFixture<CarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [ CarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Verifica que el costo total sea un numero mayor que 0', () => {
    it('verifica que el total de un numero mayor o igual ', function () {
      const Datos1:any=[{
        'chargeRate': 0.1,
        'image': "https://mojolika.com/wp-content/uploads/2019/04/196.png",
        'name': "Steam",
        'precio': "25",
        'repite': 1
      },
      ];;
      component.Datos=Datos1;
      component.user_string='us';
      expect(component.PagoTotal()).toBeTruthy();

    });

    it('verifica que el total de un numero mayor a 0 fallida ', function () {
      component.Datos=[];
       expect(component.PagoTotal()).toBeFalsy();
 
     });
  });


  describe('VERIFICAR NUMERO DE TARJETA', () => {
    it('Comprobacion tarjeta', function () {
    expect(component.tarjetacorrecta('1234567891234567')).toBeTruthy();
    });
    it('Comprobacion tarjeta FALLIDA', function () {
      expect(component.tarjetacorrecta('22323')).toBeFalsy();
    });
  });


  describe('VERIFICAR NOMBRE', () => {
    it('Comprobacion nombre', function () {
      expect(component.nombreusuario('MARCOS ')).toBeTruthy();
    });
    it('Comprobacion nombre  Fallido', function () {
      expect(component.nombreusuario('')).toBeFalsy();
    });
  });
});
