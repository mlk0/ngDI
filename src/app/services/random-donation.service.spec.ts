/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomDonationService } from './random-donation.service';

describe('RandomDonationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomDonationService]
    });
  });

  it('should ...', inject([RandomDonationService], (service: RandomDonationService) => {
    expect(service).toBeTruthy();
  }));
});
