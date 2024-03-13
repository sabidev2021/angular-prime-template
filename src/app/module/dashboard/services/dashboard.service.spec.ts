/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DashboardService } from './dashboard.service';

describe('Service: DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService]
    });
  });

  it('should ...', inject([DashboardService], (service: DashboardService) => {
    expect(service).toBeTruthy();
  }));
});
