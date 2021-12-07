const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
});

describe("GET /multi/10/8", () => {
    it("The multiplication of 10 and 8 is = 80", (done) => {
        request(app).get("/multi/10/8").expect("The multiplication of 10 and 8 is = 80", done);
    })
});

