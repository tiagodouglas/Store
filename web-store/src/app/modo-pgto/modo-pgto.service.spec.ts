import { TestBed, inject } from '@angular/core/testing';

import { ModoPgtoService } from './modo-pgto.service';

describe('ModoPgtoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModoPgtoService]
    });
  });

  it('should be created', inject([ModoPgtoService], (service: ModoPgtoService) => {
    expect(service).toBeTruthy();
  }));
});
