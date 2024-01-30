const request = require('supertest');
const app = require('../app.js');

describe('User API', () => {
    it('should create a new user', async () => {
        const userData = { name: 'John Doe', email: 'john@example.com' };
        const response = await request(app).post('/users').send(userData);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(userData));
    });

    it('should retrieve an existing user', async () => {
        const userData = { name: 'Jane Doe', email: 'jane@example.com' };
        const createUserResponse = await request(app).post('/users').send(userData);
        const userId = createUserResponse.body.id;
        const getUserResponse = await request(app).get(`/users/${userId}`);
        expect(getUserResponse.statusCode).toBe(200);
        expect(getUserResponse.body).toEqual(expect.objectContaining(userData));
    });
});
