import {ICreateEmployeePayload} from "../payload/employee-payload"
import GenericFunctions from "../page-objects/generic-page/generic-page"
import { faker } from '@faker-js/faker';
 

 export default class employeeInit {
    static initEmployee(): ICreateEmployeePayload {
        let createEmployeePayload: ICreateEmployeePayload = {
            
           // employeeId:`${GenericFunctions.genericRandomNumber(1000)}`,
            // Generate a random string
            employeeId:`${GenericFunctions.genericRandomNumber(1000)}`,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            middleName: faker.name.firstName(),
           
        }
        
        return createEmployeePayload;
    }
}

