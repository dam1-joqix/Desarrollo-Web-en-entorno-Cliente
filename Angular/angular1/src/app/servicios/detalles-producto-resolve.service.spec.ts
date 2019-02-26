import { TestBed } from '@angular/core/testing';

import { DetallesProductoResolveService } from './detalles-producto-resolve.service';

describe('DetallesProductoResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetallesProductoResolveService = TestBed.get(DetallesProductoResolveService);
    expect(service).toBeTruthy();
  });
});
