import employeeInit from "../../support/init/init-employee";
import { faker } from '@faker-js/faker';
import GenericFunctions from "../page-objects/generic-page/generic-page"

 export default class EmployeeHelper{

CreateEmployee(){
 cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
const empPayload = employeeInit.initEmployee();
        
return cy.AddEmployee("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees", empPayload) 

}


deleteemployee(empNumberr: any) {
    cy.api({
        method: 'DELETE',
        url: "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees",
        body: {
            ids: [empNumberr]
        }

    }).then((deleteResponse) => {
        expect(deleteResponse).property('status').to.equal(200);
    });

}


}

/*
addEmployeeWithLogin = () => {  
    return this.CreateEmployee().then((res) => {
          cy.api({
            method: 'POST',
            url:'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users',
            body:{
                username: `aya${GenericFunctions.genericRandomNumber(1000)}`,
                password: "aya123456",
                status: true,
                userRoleId: 2,
                empNumber: res.body.data.empNumber
            }
        }).its('body');
    })
}
*/








