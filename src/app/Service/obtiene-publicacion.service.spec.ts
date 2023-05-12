import { TestBed } from '@angular/core/testing';

import { ObtienePublicacionService } from './obtiene-publicacion.service';

describe('ObtienePublicacionService', () => {
  let service: ObtienePublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtienePublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
