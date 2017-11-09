import { Injectable } from '@angular/core';
import { ApplicantAssetInfo } from 'app/services/applicant-asset-info';
import { ILienRegistrySearchImplementation } from 'app/services/lien-registry-search-implementation';

@Injectable()
export class LienSearchService {

  constructor(private lienRegistrySearchImplementation : ILienRegistrySearchImplementation) { }

  searchLien(applicantSin : string, assetSerialNumber : string){
    let applicantAssetInfo = new ApplicantAssetInfo(applicantSin, assetSerialNumber);
    let searchResults = this.lienRegistrySearchImplementation.searchLien(applicantAssetInfo);
    console.log(searchResults);
    return searchResults;
  }
}
