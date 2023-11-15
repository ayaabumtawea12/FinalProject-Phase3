import { ShortlistCandidatePayload} from '../payload/shortlistcandidate-Payload' 
import {SheduleInterviewPayload}  from "../payload/shedule-interview-payload"

export default class  sheduleinterviewInit { 
    static sheduleinterviewCandidate(firstname:any,middlename:any,lastname:any,empNumber:any): SheduleInterviewPayload { 
        let SheduleInterviewInit: SheduleInterviewPayload = { 
            interviewDate:"2023-11-25",
            interviewName:`${firstname} ${middlename} ${lastname}`,
            interviewTime: null,
            interviewerEmpNumbers:[empNumber]
        } 
        return SheduleInterviewInit 
    } 
    
}
