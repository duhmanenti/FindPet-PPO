import { TestBed } from '@angular/core/testing';

import { PetPerdidoService } from './pet-perdido.service';

describe('PetPerdidoService', () => {
  let service: PetPerdidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetPerdidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
