import User from '../src/models/User';
import faker from 'faker';
import { factory } from 'factory-girl';

factory.define('User', User, {
    name: faker.name.findName(),
    whatsapp: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password()
})

export default factory;