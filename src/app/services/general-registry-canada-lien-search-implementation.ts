import { ILienRegistrySearchImplementation } from "app/services/lien-registry-search-implementation";
import { ApplicantAssetInfo } from "app/services/applicant-asset-info";

export class GeneralRegistryCanadaLienSearchImplementation implements ILienRegistrySearchImplementation {
    searchLien(applicant: ApplicantAssetInfo): string[] 
    {
        let searchResults : string[];
        
        //some service call goes here that retrieves some results
        searchResults =
        [
            "Lender : 'Money Fast, Toronto, ON' for Amount $2354.34, Balance : $34.56",
            "Lender : 'BMO, Montreal, QC' for Amount $1742.00, Balance : $0.0"
        ];
        
        return searchResults;
    }
}
