const request = require("supertest");

const app = require("../app");
const db = require("../db");


test("Should return 404 if path does not exist", async function () {
    const resp = await request(app).get("/no-such-path");
    expect(resp.statusCode).toEqual(404);
});

test("Should return 404 if path does not exist (test stack print)", async function () {
    process.env.NODE_ENV = "";
    const resp = await request(app).get("/no-such-path");
    expect(resp.statusCode).toEqual(404);
    delete process.env.NODE_ENV;
});

afterAll(function () {
    db.end();
});