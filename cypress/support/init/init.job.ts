import {AddJopPayload} from '../../support/payload/jop-payload';
import { faker } from '@faker-js/faker';


export default class AddJopInit {
    static JopInit(): AddJopPayload {
        let createJobPayload:AddJopPayload= {
            title: faker.name.jobTitle(),
            description: faker.lorem.sentence(),
            specification: null, // Generate a random word for specification
            note: faker.lorem.paragraph()
        }
        return createJobPayload;
    }
}

 
 