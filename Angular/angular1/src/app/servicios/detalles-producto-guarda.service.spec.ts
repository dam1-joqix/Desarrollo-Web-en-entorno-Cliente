import { TestBed } from '@angular/core/testing';

import { DetallesProductoGuardaService } from './detalles-producto-guarda.service';

describe('DetallesProductoGuardaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallesProductoGuardaService = TestBed.get(DetallesProductoGuardaService);
    expect(service).toBeTruthy();
  });
});
