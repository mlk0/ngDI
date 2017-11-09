import { Injectable } from '@angular/core';
import { IBuyOrSellService } from 'app/services/ibuy-or-sell-service';

@Injectable()
export class BuyOrSellService  implements IBuyOrSellService{

  constructor() { }

  getTradeAction() : string 
  {
    let tradeActon : string = "BUY";
    var stockRiskIndicator = Math.random();
    if(stockRiskIndicator > 0.6){
      tradeActon = "SELL"
    }
    else
    {
      if(stockRiskIndicator < 0.3){
        tradeActon = "KEEP"
      }
    }

    return tradeActon;
  }

}
