process.env.NODE_ENV = "test";
const request = require('supertest');
const app = require("../app");
const destinations = require("../api");

describe("GET /destinations", () => {
    it("Get location information", async () => {
        const res = await request(app).get("/destinations");
        expect(res.status).toBe(200);
    });
});