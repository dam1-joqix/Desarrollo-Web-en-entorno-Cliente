import { TestBed } from '@angular/core/testing';

import { CargaProductoService } from './carga-producto.service';

describe('CargaProductoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CargaProductoService = TestBed.get(CargaProductoService);
    expect(service).toBeTruthy();
  });
});
