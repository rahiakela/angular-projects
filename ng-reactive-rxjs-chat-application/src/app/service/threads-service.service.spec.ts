import { TestBed, inject } from '@angular/core/testing';

import { ThreadsServiceService } from './threads-service.service';

describe('ThreadsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadsServiceService]
    });
  });

  it('should be created', inject([ThreadsServiceService], (service: ThreadsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
