const axios = require("axios");
const { sendRequest } = require("../helpers/api.helpers");
const testData = require("../config/data.json")

/*
•Verify that allows creating a User
•Verify that allows login as a User
•Verify that allows creating the list of Users
•Verify that allows Log out User
•Verify that allows adding a new Pet
•Verify that allows updating Pet’s image
•Verify that allows updating Pet’s name and status
•	Verify that allows deleting Pet
*/

describe("SQE Task3", () => {
    /* it(" 1. Verify that allows creating a User", async () => {
         const response = await sendRequest("v2/user", testData.Scenarios["1st"], "post");
         //console.log(response);
         expect(response.status).to.equal(200);
     });

     it(" 2. Verify that allows login as a User", async () => {
         tmpURL = "v2/user/login?username=";
         tmpURL = tmpURL.concat(testData.Scenarios["2nd"][1].username);
         tmpURL = tmpURL.concat("&password=");
         tmpURL = tmpURL.concat(testData.Scenarios["2nd"][1].password);
         const response = await sendRequest(tmpURL);
         //console.log(response);
         expect(response.status).to.equal(200);
     });
     it(" 3. Verify that allows creating the list of Users", async ()=> {
         const response = await sendRequest("v2/user/createWithList",testData.Scenarios["3rd"],"post");
         expect(response.status).to.equal(200);
     });
    it(" 4. Verify that allows Log out User", async () => {
        tmpURL = "v2/user/login?username=";
        tmpURL = tmpURL.concat(testData.Scenarios["2nd"][1].username);
        tmpURL = tmpURL.concat("&password=");
        tmpURL = tmpURL.concat(testData.Scenarios["2nd"][1].password);
        const responseLogin = await sendRequest(tmpURL);
        expect(responseLogin.status).to.equal(200);

        const responseLogout = await sendRequest("v2/user/logout");
        expect(responseLogout.status).to.equal(200);

    });*/

    /*  it("Verify that allows adding a new Pet",async()=>{ });
      it("Verify that allows updating Pet’s image",async()=>{ });
      it("Verify that allows updating Pet’s name and status",async()=>{ });
      it("Verify that allows deleting Pet",async()=>{ });*/

    /* it("POST posts SHORTESSSSST", async () => {
         const response = await sendRequest("posts",testData.Scenarios.Tutorial,"post");
         expect(response.status).to.equal(201);
     });*/
})

/*describe("API test suite", () => {
    it("GET post/1", async () => {
        const response = await axios({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            method: "get"
        });
    });

    it("GET post/1 SHORT", async () => {
        const response = await sendRequest("posts/1");

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

    it("POST posts SHORT", async () => {
        const dataValuess={
            title: "foo",
            body: "bar",
            userId: 1,
        };
        const response = await sendRequest("posts",dataValuess,"post");
        expect(response.status).to.equal(201);
    });

    it("POST posts SHORTESSSSST", async () => {
        const response = await sendRequest("posts",testData01,"post");
        expect(response.status).to.equal(201);
    });


});*/