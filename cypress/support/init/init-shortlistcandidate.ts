import { ShortlistCandidatePayload} from '../payload/shortlistcandidate-Payload' 
import GenericFunctions from '../page-objects/generic-page/generic-page';

export default class shortlistcandidateInit { 
    static initshortlistCandidate(): ShortlistCandidatePayload { 
        let ShortlistCandidatePayload: ShortlistCandidatePayload = { 
          note:null
        } 
        return ShortlistCandidatePayload 
    } 
    
}
