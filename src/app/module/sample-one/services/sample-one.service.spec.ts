/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { SampleOneService } from './sample-one.service';

describe('Service: SampleOne', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleOneService]
    });
  });

  it('should ...', inject([SampleOneService], (service: SampleOneService) => {
    expect(service).toBeTruthy();
  }));
});
