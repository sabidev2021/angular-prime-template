/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SampleTwoService } from './sample-two.service';

describe('Service: SampleTwo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SampleTwoService]
    });
  });

  it('should ...', inject([SampleTwoService], (service: SampleTwoService) => {
    expect(service).toBeTruthy();
  }));
});
