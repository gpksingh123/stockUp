const supertest = require('supertest');
const server = require('../server/server.js');
require('iconv-lite').encodingExists('foo')
const db = require('../database/index.js');

const request = supertest(server);
beforeAll(async () => {
  await db.initialize();
  await require('../database/seed.js');
});

afterAll(async () => {
  await db.sequelize.close();
});



describe("GET request with no paramaters", () => {
  test("It should respond with a status of 200", async () => {
    const response = await request.get(`/`);
    expect(response.statusCode).toBe(200);
  });
});