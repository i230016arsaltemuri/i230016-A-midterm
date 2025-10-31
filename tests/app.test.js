const request = require('supertest');
const app = require('../index');

describe('Basic API Tests', () => {
  test('GET / should return Hello message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello');
  });

  test('GET /api/data should return JSON', async () => {
    const res = await request(app).get('/api/data');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'API working fine');
  });

  test('GET /unknown should return 404', async () => {
    const res = await request(app).get('/unknown');
    expect(res.statusCode).toBe(404);
  });
});
