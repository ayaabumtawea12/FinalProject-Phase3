import sheduleinterviewInit from "../init/init-sheduleinterview"; 
 
export default class interviewpassedHelper { 
  addNewCandidateViaAPI(candidateId:any,f:any,m:any,la:any,empNumber:any) { 
 
        const sheduleinterview = sheduleinterviewInit.sheduleinterviewCandidate(f,m,la,empNumber); 
        
        return cy.sheduleInterview(`https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates/${candidateId}/shedule-interview`,sheduleinterview) 
      } 
    }
     