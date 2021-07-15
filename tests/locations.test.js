process.env.NODE_ENV = "test";
const request = require('supertest');
const app = require("../app");
const locations = require("../api");

describe("GET /locations/:name", () => {
    it("Get specific location information", async () => {
        let name = "Salem";
        const res = await request(app).get(`/locations/${name}`);
        expect(res.status).toBe(200);
    });

    it("Should return 404 if name not specified", async () => {
        const res = await request(app).get(`/locations`);
        expect(res.status).toBe(404);
    });
});