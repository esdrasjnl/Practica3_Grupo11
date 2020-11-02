import { TestBed } from '@angular/core/testing';

import { UsuarioService } from './usuario.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('UsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[
      HttpClientTestingModule, RouterTestingModule.withRoutes([])],
  }));

  it('should be created', () => {
    const service: UsuarioService = TestBed.get(UsuarioService);
    expect(service).toBeTruthy();
  });
});
