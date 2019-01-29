import { TestBed } from '@angular/core/testing';

import { CargarLuchadoresService } from './cargar-luchadores.service';

describe('CargarLuchadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargarLuchadoresService = TestBed.get(CargarLuchadoresService);
    expect(service).toBeTruthy();
  });
});
