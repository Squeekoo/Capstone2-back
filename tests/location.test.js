process.env.NODE_ENV = "test";
const request = require('supertest');
const app = require("../app");

describe("GET /location/:id", () => {
    it("Get specific location information", async () => {
        let id = "10768823";
        const res = await request(app).get(`/locations/${id}`);
        expect(res.statusCode).toEqual(200);
    });

    it("Should return 404 if name not specified", async () => {
        const res = await request(app).get(`/location`);
        expect(res.statusCode).toEqual(404);
    });
});