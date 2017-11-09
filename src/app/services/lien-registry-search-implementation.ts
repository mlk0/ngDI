import { ApplicantAssetInfo } from "app/services/applicant-asset-info";

 
export interface ILienRegistrySearchImplementation {
    
    searchLien(applicant : ApplicantAssetInfo)  : string[];
}
