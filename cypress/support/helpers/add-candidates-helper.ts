import candidateInit from "../init/init-candidates"; 
 
 
let Id: number; 
export const URLs = { 
    candidates: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates", 
} 
 
   
export default class CandidateHelper { 
  addNewCandidateViaAPI(vacancyId:any) { 
 
        const CandidatePayload = candidateInit.initCandidate(vacancyId); 
        
        return cy.addNewCandidate(URLs.candidates, CandidatePayload).as('CREATED_CANDIDATE') 
      } 


      deleteCandidate(candidateid: any) {
        cy.api({
            method: 'DELETE',
            url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates",
            body: {
                ids: [candidateid]
            }
    
        }).then((deleteResponse) => {
            expect(deleteResponse).property('status').to.equal(200);
        });
    
    }



}