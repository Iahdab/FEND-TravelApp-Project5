// Import the js file to test
// server test function from https://dev.to/mhmdlotfy96/testing-nodejs-express-api-with-jest-and-supertest-1bk0 reference

import {app } from "../../../server/index"
const requests= require('supertest');
describe("Test app ", () => {
  test("test request",async () => {
  //  expact(app).toBeDefined();
  //.send(path.resolve('src/client/views/index.html'))
  const responded= await requests(app).get("/")
  expect(responded.status).toBe(200);
  
  });
});
