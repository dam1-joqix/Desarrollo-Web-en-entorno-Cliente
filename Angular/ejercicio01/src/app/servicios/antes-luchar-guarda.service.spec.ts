import { TestBed } from '@angular/core/testing';

import { AntesLucharGuardaService } from './antes-luchar-guarda.service';

describe('AntesLucharGuardaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntesLucharGuardaService = TestBed.get(AntesLucharGuardaService);
    expect(service).toBeTruthy();
  });
});
