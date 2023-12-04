import { TestBed } from '@angular/core/testing';

import { ServicesTravelsService } from './services-travels.service';

describe('ServicesTravelsService', () => {
  let service: ServicesTravelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesTravelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
