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
});
