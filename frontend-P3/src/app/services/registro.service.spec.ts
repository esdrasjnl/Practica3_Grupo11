import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('RegistroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    }));

  it('should be created', () => {
    const service: RegistroService = TestBed.get(RegistroService);
    expect(service).toBeTruthy();
  });
});
