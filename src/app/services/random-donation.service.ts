import { Injectable } from '@angular/core';

@Injectable()
export class RandomDonationService {

  constructor() { }

  donate() : number {
    return Math.random() * 1000;
  }

}
