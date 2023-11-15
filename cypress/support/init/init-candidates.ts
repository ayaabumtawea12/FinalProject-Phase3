import { ICreateCandidatePayload} from '../payload/candidates-payload' 
import GenericFunctions from '../page-objects/generic-page/generic-page';

export default class candidateInit { 
    static initCandidate(vacancyId:any): ICreateCandidatePayload { 
        let createCandidatePayload: ICreateCandidatePayload = { 
             comment: null, 
            consentToKeepData: false, 
            contactNumber: null, 
           // dateOfApplication: "2023-11-14", 
            email: `aya${GenericFunctions.genericRandomNumber(1000)}@example.com`, 
            firstName: `aya${GenericFunctions.genericRandomNumber(1000)}`, 
            keywords: null, 
            lastName: `mtawea${GenericFunctions.genericRandomNumber(1000)}`, 
            middleName: null, 
            vacancyId: vacancyId
        } 
        return createCandidatePayload 
    } 
    
}