import sheduleinterviewInit from "../init/init-sheduleinterview"; 
 
export default class sheduleinterviewHelper { 
  addNewCandidateViaAPI(candidateId:any,firstname:any,middlename:any,lastname:any,empNumber:any) { 
 
        const sheduleinterview = sheduleinterviewInit.sheduleinterviewCandidate(firstname,middlename,lastname,empNumber); 
        
        return cy.sheduleInterview(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shedule-interview`,sheduleinterview) 
      } 
    }

 