import { Component, ReflectiveInjector, OnInit, Inject } from '@angular/core';
import { GreetingsService } from 'app/services/greetings.service';
import { RandomDonationService } from 'app/services/random-donation.service';
import { BuyOrSellService } from 'app/services/buy-or-sell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  tradeActionRecommendation: string;
  weatherConditions : string;

  ngOnInit(): void {
    this.greeting = this.greetingService.greet();
    this.donatedAmount = this.donationService.donate();
  }
  
  title = 'app works!';

  greetingService : GreetingsService;
  donationService: RandomDonationService;
  
  greeting : string;
  donatedAmount : number;
 
  constructor(private buyOrSellService : BuyOrSellService,
  @Inject('weatherPrognosis') private weatherService,
  @Inject('sampleConstant') private theConstant,
  @Inject('areaConfig') private defaultAreaConfig,
  @Inject('serverName') private theDatabaseServer,
  @Inject('caLienSearch') private canadianLienSearch,
  @Inject('usLienSearch') private usLienSearch,
  @Inject('euLiens') private europeCarLiens
  )
  {    
    const injector : any = ReflectiveInjector.resolveAndCreate([GreetingsService, RandomDonationService]);
  
    this.greetingService = injector.get(GreetingsService);
    this.donationService = injector.get(RandomDonationService);
  }


allCanadianLiens : string[];  
allUsLiens : string[];
euCarLiens : string[];

checkLiens(sin : string, serialNumber : string){
  let canadianLiens = this.canadianLienSearch.searchLien(sin, serialNumber);
  console.log(canadianLiens);
  this.allCanadianLiens = canadianLiens;

  let usLiens : string[];
  usLiens = this.usLienSearch.searchLien(sin, serialNumber);
  console.log(usLiens);
  this.allUsLiens = usLiens;


  let carLiensInEurope = this.europeCarLiens.searchLien(sin, serialNumber);
  console.log(carLiensInEurope);
  this.euCarLiens = carLiensInEurope;
}


  donate() : void {
    this.donatedAmount = this.donationService.donate();
  }

  getStockActionRecommendation(){
    this.tradeActionRecommendation = this.buyOrSellService.getTradeAction();
  }

  getWeatherPrognosis(){
    this.weatherConditions = this.weatherService.getWeather();
  }
  

}
