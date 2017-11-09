/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuyOrSellService } from './buy-or-sell.service';

describe('BuyOrSellService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyOrSellService]
    });
  });

  it('should ...', inject([BuyOrSellService], (service: BuyOrSellService) => {
    expect(service).toBeTruthy();
  }));
});
