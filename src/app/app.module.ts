import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BuyOrSellService } from 'app/services/buy-or-sell.service';
import { WeatherService } from 'app/services/weather.service';
import { Constants } from 'app/constants';
import { LienSearchService } from 'app/services/lien-search.service';
import { GeneralRegistryCanadaLienSearchImplementation } from 'app/services/general-registry-canada-lien-search-implementation';
import { SmallUsLendersLienSearchImplementation } from 'app/services/small-us-lenders-lien-search-implementation';
import { RandomRate } from 'app/services/random-rate';
import { EuropeCarLienSearchService } from 'app/services/europe-car-lien-search-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    
    {provide : BuyOrSellService, useClass : BuyOrSellService}, //or shorthand is just BuyOrSellService,
    {provide : 'weatherPrognosis', useClass : WeatherService} , // this one will need to be injected with @Inject in the constructor
    {provide : "sampleConstant", useValue : 'ABC123'},
    {provide : 'areaConfig', useValue : Constants.initialAreaSettings},
    {provide : 'serverName', useValue : Constants.webServer},
    {provide: 'caLienSearch', 
      useFactory() {
        return new LienSearchService(new GeneralRegistryCanadaLienSearchImplementation())
      }},

      {provide : 'usLienSearch', 
      useFactory(){
        return new LienSearchService(new SmallUsLendersLienSearchImplementation())
      }},

      RandomRate,
      {
        provide : 'euLiens',
        deps : [RandomRate],
        useFactory(rateService : RandomRate){
        let europeCarLienSearchService = new EuropeCarLienSearchService(rateService);
        return new LienSearchService(europeCarLienSearchService);
      }}
      
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
