/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LienSearchService } from './lien-search.service';

describe('LienSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LienSearchService]
    });
  });

  it('should ...', inject([LienSearchService], (service: LienSearchService) => {
    expect(service).toBeTruthy();
  }));
});
