import { TestBed } from '@angular/core/testing';

import { MasinfoService } from './masinfo.service';

describe('MasinfoService', () => {
  let service: MasinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
