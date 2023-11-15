import AddJopInit from "../init/init.job"

export const URLs = {
    ADD_JOP: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles'
}


export default class AddJob { 
    addNewJopViaAPI() { 
      const jopPayload = AddJopInit.JopInit(); 
      return cy.newJop("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles", jopPayload).as('CREATED_JOP')
    } 
  
    deleteCreatedJop() {
      cy.get('@CREATED_JOP').then((response) => {
         const jopId = Cypress.$(response).find('body').text();  
         expect(jopId).to.exist;  
         cy.api({
             method: 'DELETE',
             url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/job-titles",
             body: { "ids": [jopId] }
         }).then((deleteResponse) => {
             expect(deleteResponse).property('status').to.equal(200);
         });
     });
  }
}