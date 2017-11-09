import { ILienRegistrySearchImplementation } from "app/services/lien-registry-search-implementation";
import { ApplicantAssetInfo } from "app/services/applicant-asset-info";
import { RandomRate } from "app/services/random-rate";

export class EuropeCarLienSearchService implements ILienRegistrySearchImplementation {
    
    constructor(private rateProvider : RandomRate){}
    
    searchLien(applicant: ApplicantAssetInfo): string[] {
        let searchResults: string[];

        searchResults =
        [
            `Lender : 'London Cars, London, UK' for Rate ${this.rateProvider.getRate()}%, Balance : $243.00`,
            `Lender : 'Eifel Motors, Pariss, FR' for Rate ${this.rateProvider.getRate()}%, Balance : $22.01`,
        ];
        

        return searchResults;
    }



}
