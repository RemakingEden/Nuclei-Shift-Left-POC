const request = require("supertest");
const app = require("../../app");

describe("Tests with complete DB", () => {

    describe("Tests with GET", () => {

        it("Get list of plants", async () => {
            const res = await request(app).get("/api/plants");
            expect(res.statusCode).toEqual(200);
        });

    });
});