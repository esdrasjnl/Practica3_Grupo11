import { TestBed } from '@angular/core/testing';

import { CompraService } from './compra.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('CompraService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    }));

  it('should be created', () => {
    const service: CompraService = TestBed.get(CompraService);
    expect(service).toBeTruthy();
  });
});
