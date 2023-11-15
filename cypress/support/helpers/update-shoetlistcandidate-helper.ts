import shortlistcandidateInit from "../init/init-shortlistcandidate"; 
 
 
let Id: number; 
export const URLs = { 
    candidates: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates", 
} 
 
   
export default class shortlistCandidateHelper { 
  addNewCandidateViaAPI(candidateId:any) { 
 
        const shortlistCandidatePayload = shortlistcandidateInit.initshortlistCandidate(); 
        
        return cy.shortlistCandidate(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`, shortlistCandidatePayload) 
      } 
    }