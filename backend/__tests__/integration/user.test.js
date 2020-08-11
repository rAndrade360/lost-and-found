import app from '../../src/app';
import request from 'supertest';
import factory from '../factory';
import faker from 'faker';
import User from '../../src/models/User';
describe('Users routes CRUD tests', () => {
    it('should store the user and response 200 http status code', async () => {
        const response = await request(app)
            .post('/users')
            .send({
                name: faker.name.findName(),
                whatsapp: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                password: faker.internet.password()
            });

        expect(response.status).toBe(200);
    }, 5000)

    it('should return the users list and response 200 status code', async () => {
        const response = await request(app)
            .get('/users')
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0);
    });

    it('should return a unique user and 200 status code if the id exists in database', async () => {
        const user = await User.create({
            name: faker.name.findName(),
            whatsapp: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            password: faker.internet.password()
        });
        const id = user._id;
        console.log(user)
        const response = request(app)
            .get(`/user/${id}/show`)

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('_id')
    })
})