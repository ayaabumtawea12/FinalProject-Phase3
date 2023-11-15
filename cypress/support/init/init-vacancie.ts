import {AddVacanciesPayload} from "../payload/vacancie-payload"

import { faker } from '@faker-js/faker';
 
export default class vacanciesInit {
    static initVacancies(empNumber:any,id:any): AddVacanciesPayload {
        let createEmployeePayload: AddVacanciesPayload = {
            employeeId: empNumber, // Generate a random string
            name: faker.name.firstName(),
            jobTitleId: id,
            isPublished:true,
            status:true,
        }
        
        return createEmployeePayload;
    }
}
