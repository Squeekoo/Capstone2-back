process.env.NODE_ENV = "test";
const request = require('supertest');
const app = require("../app");

describe("GET /locations/:name", () => {
    it("Get specific location information", async () => {
        let name = "Salem";
        const res = await request(app).get(`/locations/${name}`);
        expect(res.statusCode).toEqual(200);
    });

    it("Should return 404 if name not specified", async () => {
        const res = await request(app).get(`/locations`);
        expect(res.statusCode).toEqual(404);
    });

    it("Should return 404 if invalid name", async () => {
        let name = "Greaselightnin"
        const res = await request(app).get(`/locations/${name}`);
        expect(res.statusCode).toEqual(404);
    });
});