import { Injectable } from '@angular/core';
import { IGreetings } from 'app/services/igreetings';

@Injectable()
export class GreetingsService implements IGreetings{
  greet(): string {
    return "Hellow Cowboy!"
  }

  constructor() { }

}
