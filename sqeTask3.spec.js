const axios = require("axios")

describe("API test suite", ()=>{


    it("GET post/1",async ()=>{
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/post/1",
            method: "get"
        });
        console.log(response.data);
        console.log(response.status);
    })
})