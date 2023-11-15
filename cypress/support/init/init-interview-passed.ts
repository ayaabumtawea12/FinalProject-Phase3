import { ShortlistCandidatePayload} from '../payload/shortlistcandidate-Payload' 
import {InterviewPassedPayload}  from "../payload/interview-passed-payload"

export default class  sheduleinterviewInit { 
    static sheduleinterviewCandidate(f:any,m:any,la:any,empNumber:any): InterviewPassedPayload { 
        let SheduleInterviewInit: InterviewPassedPayload = { 
            note:"passed"
        } 
        return SheduleInterviewInit 
    } 
    
}
