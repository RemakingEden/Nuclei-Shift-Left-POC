const request = require("supertest");
const app = require("../../app");

describe("Tests with complete DB", () => {

    describe("Tests with GET", () => {

        it("Get list of plants", async () => {
            const res = await request(app).get("/api/plants");
            expect(res.statusCode).toEqual(200);
        });

    });

    describe("Tests with POST", () => {

        it("Add a new plant", async () => {
            const res = await request(app).post("/api/plants")
            .send({
                "species": "Boston Fern",
                "colour": "Green",
                "size": "S",
                "season": false
            });
            expect(res.statusCode).toEqual(201);
            // Needs a db check to check post went correctly
        });

    });

    describe("Tests with PUT", () => {

        it("Add a new plant", async () => {
            const res = await request(app).put("/api/plants/1")
            .send({
                "species": "Cactus",
                "colour": "Purple",
                "size": "L",
                "season": true
            });
            expect(res.statusCode).toEqual(200);
            // Needs a db check to check put went correctly
        });

    });
});