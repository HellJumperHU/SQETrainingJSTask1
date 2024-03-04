const axios = require("axios");
const { expect } = require("chai");

describe("API test suite", () => {


    it("GET post/1", async () => {
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "get"
        });
        console.log(response.data);
        console.log(response.status);
    });

    it("POST posts", async () => {
        const response = await axios({
            method: "post",
            url: "https://jsonplaceholder.typicode.com/posts",
            headers: {
                'Content-type': 'application/json; charset = UTF-8'
            },
            data: {
                title: "foo",
                body: "bar",
                userId: 1,
            },
        });
        expect(response.status).to.equal(201);
    });
});