import vacanciesInit from "../../support/init/init-vacancie";

 export default class VacancieHelper{

CreateVacancie(empNumber:any,id:any){
 //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
const VacanciePayload = vacanciesInit.initVacancies(empNumber,id);
        
return cy.newVacancie("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies", VacanciePayload) 

}


deleteVacancie(vacancyId: any) {
    cy.api({
        method: 'DELETE',
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/vacancies",
        body: {
            ids: [vacancyId]
        }

    }).then((deleteResponse) => {
        expect(deleteResponse).property('status').to.equal(200);
    });

}


}




