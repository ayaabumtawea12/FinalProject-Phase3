 import { ICreateEmployeePayload } from "../../payload/employee-payload";
 import { AddVacanciesPayload } from "../../payload/vacancie-payload";
 import { AddJopPayload } from "../../payload/jop-payload";
 import {ICreateCandidatePayload} from  "../../payload/candidates-payload";
 import {ShortlistCandidatePayload} from  "../../payload/shortlistcandidate-Payload"
 import {SheduleInterviewPayload} from  "../../payload/shedule-interview-payload"
declare global {
    namespace Cypress {
        interface Chainable {
            AddEmployee: (requestUrl: string, empPayload : ICreateEmployeePayload) => Chainable<any>;
            newJop: (requestURL: string, JopPayload: AddJopPayload) => Chainable<any>;
            newVacancie: (requestURL: string, VacanciePayload: AddVacanciesPayload) => Chainable<any>;
            addNewCandidate: (requestURL: string, candidatePayload: ICreateCandidatePayload) => Chainable<any>;
            shortlistCandidate: (requestURL: string, shortlistcandidatePayload: ShortlistCandidatePayload) => Chainable<any>;
            sheduleInterview: (requestURL: string, sheduleinterviewPayload: SheduleInterviewPayload) => Chainable<any>;
        }
    }
}

 
Cypress.Commands.add('AddEmployee', (requestUrl:string, empPayload: ICreateEmployeePayload) => {
    return cy.api({
        method: 'POST',
        url: requestUrl,
        body:empPayload, 
        headers: {
            'Content-Type': 'application/json'
        }
    })
})


Cypress.Commands.add('newJop', (requestURL: string,  JopPayload: AddJopPayload) => {
    return cy.api(
        {
            method: 'POST',
            url: requestURL,
            body: JopPayload,
            headers: {
                'Content-Type': 'application/json',
             
             },
         }
    ).its('body');
});




Cypress.Commands.add('newVacancie', (requestURL: string,  VacanciePayload: AddVacanciesPayload) => {
    return cy.api(
        {
            method: 'POST',
            url: requestURL,
            body: VacanciePayload,
            headers: {
                'Content-Type': 'application/json',
              
             },
         }
    ).its('body');
});



Cypress.Commands.add('addNewCandidate', (requestUrl: string, vacancyPayload: ICreateCandidatePayload) => { 
    return cy.api({ 
        method: 'POST', 
        url: requestUrl, 
        body: vacancyPayload, 
        headers: { 
            'Content-Type': 'application/json' 
        } 
    }) 
        .its('body') 
})

Cypress.Commands.add('shortlistCandidate', (requestUrl: string, shortlistcandidatePayload: ShortlistCandidatePayload) => { 
    return cy.api({ 
        method: 'PUT', 
        url: requestUrl, 
        body: shortlistcandidatePayload, 
        headers: { 
            'Content-Type': 'application/json' 
        } 
    }) 
        .its('body') 
})

Cypress.Commands.add('sheduleInterview', (requestUrl: string,sheduleinterviewPayload: SheduleInterviewPayload) => { 
    return cy.api({ 
        method: 'POST', 
        url: requestUrl, 
        body: sheduleinterviewPayload, 
        headers: { 
            'Content-Type': 'application/json' 
        } 
    }) 
        .its('body') 
})
 