import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {

  constructor() { }

  getWeather(){

    let weatherIndex = Math.random();
    
    if(weatherIndex > 0.8){
      return "RAINY";
    }

    if(weatherIndex > 0.6){
      return "SUNNY";
    }
    


    if(weatherIndex > 0.4){
      return "WINDY";
    }
    


    if(weatherIndex > 0.2){
      return "SNOWY";
    }

  }

}
