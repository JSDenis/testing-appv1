const request = require('supertest');
const app = require('../server');

describe('GET /datalab6', () => {
    it('should return Lab 6 data.', async () => {
        const response = await request(app).get('/datalab6');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Lab 6 data.');
    });
});
 