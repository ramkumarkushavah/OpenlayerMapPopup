import { TestBed, inject } from '@angular/core/testing';

import { RestcurdService } from './restcurd.service';

describe('RestcurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcurdService]
    });
  });

  it('should be created', inject([RestcurdService], (service: RestcurdService) => {
    expect(service).toBeTruthy();
  }));
});
