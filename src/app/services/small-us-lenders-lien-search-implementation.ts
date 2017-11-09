import { ILienRegistrySearchImplementation } from "app/services/lien-registry-search-implementation";
import { ApplicantAssetInfo } from "app/services/applicant-asset-info";

export class SmallUsLendersLienSearchImplementation implements ILienRegistrySearchImplementation{
    searchLien(applicant: ApplicantAssetInfo): string[] {
        let searchResults : string[];
        
        //some service call goes here that retrieves some results
        searchResults =
        [
            "Lender : 'US Lending Easy, Miami, FL' for Amount $13400.00, Balance : $353.75",
            "Lender : 'Holiday Money, San Francisco, CA' for Amount $342.00, Balance : $34.0"
        ];
        
        return searchResults;
    }
}


