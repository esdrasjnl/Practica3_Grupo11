import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraComponent } from './compra.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompraComponent', () => {
  let component: CompraComponent;
  let fixture: ComponentFixture<CompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, RouterTestingModule.withRoutes([]),
        ReactiveFormsModule, FormsModule],
      declarations: [CompraComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('TDD PARA CARGA DE GIFTCARDS', () => {
    it('GIFTCARDS CARGADAS EXITOSAMENTE', function () {
      expect(component.error).toBeFalsy();

    });

  });

  describe('TDD VERIFICANDO VALORES', () => {
    it('No se guardara la tarjeta', function () {
      const res =
        [
          {
            id: "4",
            nombre: "Amazon",
            imagen: "https://www.shopmyexchange.com/products/images/xlarge/2008097_0000.jpg",
            chargeRate: 0.5,
            active: false,
            disponibilidad: [
              2,
              4
            ]
          }
        ]
      expect(component.verificaEstado(res)).not.toEqual(res);

    });

    it('Se guardara la tarjeta por que si esta activa', function () {
      const res =
        [
          {
            id: "4",
            nombre: "Amazon",
            imagen: "https://www.shopmyexchange.com/products/images/xlarge/2008097_0000.jpg",
            chargeRate: 0.5,
            active: true,
            disponibilidad: [
              2,
              4
            ]
          }
        ]
      expect(component.verificaEstado(res)).toEqual(res);

    });

  });
});
