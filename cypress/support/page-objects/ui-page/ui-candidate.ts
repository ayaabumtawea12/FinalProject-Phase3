//import "../.././././../fixtures/cv.pdf"
/// <reference types="cypress-downloadfile"/>
export default class CandidatePage{

    elements={
        MarkInterviewPassed:()=>cy.get(".oxd-button--success"),
        MarkInterviewFailed:()=>cy.get(".oxd-button--medium"),
        Statues:()=>cy.get(".oxd-text--subtitle-2"),
        SaveBtn:()=>cy.get(".orangehrm-left-space"), 
        Switch:()=>cy.get(".oxd-switch-input"),
        addFileBTN: () => cy.get('.bi-upload'),
        FileInput: () => cy.get('input[type = "file"]'),
        saveBTNs: () => cy.get('[type = submit]'),
        //addFileBTN: () => cy.get('.oxd-button'),
        DownloadFile:()=>cy.get(".orangehrm-file-preview"),
        successBTN:()=>cy.get(".oxd-button--success")

}

InterviewPassed(c:any){
cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${c}`)
this.elements.MarkInterviewPassed().click({force:true});
//cy.contains("Save").click()
this.elements.SaveBtn().click( )
 }


InterviewFailed(candidateid:any){
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateid}`)
   this.elements.MarkInterviewFailed().eq(1).click({force:true});
   // cy.contains("Save").click({force: true} )
   this.elements.SaveBtn().click()
 }

assertionpassed(vacancyName:any){
    this.elements.Statues().should("have.text","Status: Interview Passed")
   
        cy.get(".oxd-topbar-body-nav").contains("Candidates").click();
        cy.get(".oxd-select-text-input").eq(1).click({ force: true });
        cy.get(".oxd-select-dropdown").contains(vacancyName).click();
        cy.get(".oxd-button--secondary").eq(0).click({ force: true });
        cy.get(" .oxd-table-cell-actions  >.oxd-icon-button").eq(0).click();
        cy.get(".orangehrm-recruitment-status").should("contain", "Status: Interview Passed");
        cy.get("button").should("have.class", "oxd-button--danger");
//cy.contains("Status: Interview Passed");
}

assertionfailed(vacancyName:any){
    //cy.contains("Status: Interview Failed");
    this.elements.Statues().should("have.text","Status: Interview Failed")
    cy.get(".oxd-topbar-body-nav").contains("Candidates").click();
    cy.get(".oxd-select-text-input").eq(1).click({ force: true });
    cy.get(".oxd-select-dropdown").contains(vacancyName).click();
    cy.get(".oxd-button--secondary").eq(0).click({ force: true });
    cy.get(" .oxd-table-cell-actions  >.oxd-icon-button").eq(0).click();
    cy.get(".orangehrm-recruitment-status").should("contain", "Status: Interview Failed");
    cy.get("button").should("have.class", ".oxd-button--success");
 }


 uploadFileToCandidate(candidateid:any){
    cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${candidateid}`)
    this.elements.Switch().click({force: true});
    this.elements.addFileBTN().click({force: true});
    this.elements.FileInput().selectFile("cypress/fixtures/cv.txt", {force: true});
    this.elements.saveBTNs().click({force: true});
   

}

downloadFile(){
this.elements.DownloadFile().click({force: true});
//cy.readFile('cypress/fixtures/cv.txt'); 
//cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${c}`)
//this.elements.Switch().click({force: true});
//cy.downloadFile(`https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/addCandidate/${c}`,'mydownloads','cv.txt')

}

asertion(){
    cy.readFile("cypress/fixtures/cv.txt", 'utf-8').then((contentFile1) => {
        // Read the content of the second file
        cy.readFile("cypress/downloads/cv.txt", 'utf-8').then((contentFile2) => {
          // Perform assertions to check if the content of both files is the same
          expect(contentFile1).to.equal(contentFile2);
        });
      });
}

JobOfferedStatuse(){
this.elements.successBTN().eq(1).click({force: true});
cy.contains("Save").click()

}

HiredStatus(){
this.elements.successBTN().click({force: true});
this.elements.SaveBtn().click({force: true})
}

 
 
}





 