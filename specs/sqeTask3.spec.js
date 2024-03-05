const axios = require("axios");
const { sendRequest } = require("../helpers/api.helpers");
const testData = require("../src/data/data.json")
const FormData = require('form-data');


describe("SQE Task3", () => {
    it(" 1. Verify that allows creating a User", async () => {
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
    it(" 3. Verify that allows creating the list of Users", async () => {
        const response = await sendRequest("v2/user/createWithList", testData.Scenarios["3rd"], "post");
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

    });

    it("5. Verify that allows adding a new Pet", async () => {
        const responseLogout = await sendRequest("v2/pet", testData.Scenarios["5th"].pet, "post");
        expect(responseLogout.status).to.equal(200);
    });
    //https://petstore.swagger.io/v2/pet/555555/uploadImage



    it("6. Verify that allows updating Pet’s image", async () => {
        const fs = require('fs/promises');
        const FormData = require('form-data');
        const form = new FormData();
        const file = await fs.readFile('./src/images/pet.png');
        form.append('file', file, "kutyuus.jpg");
        const response = await axios({
            method: "post",
            url: "https://petstore.swagger.io/v2/pet/55/uploadImage",
            data: form,
            headers: { 'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        //console.log(response);
    });


    it("7. Verify that allows updating Pet’s name and status", async () => {
        //const FormData = require('form-data');
        //const form = new FormData();
        //form.append('text',{"status":"sold"});
        const response = await axios({
            method: "post",
            url: "https://petstore.swagger.io/v2/pet/55",
            data: { 'status': 'sold', 'name': "modified" },
            //data: form,
            headers: { 'accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        //(response);
    });



    it("8. Verify that allows deleting Pet", async () => {
        tmpPath = "v2/pet/";
        tmpPath = tmpPath.concat(testData.Scenarios["6th"].IDs[0]);
        const response = await sendRequest(tmpPath, null, "delete");
        expect(response.status).to.equal(200);
    });

})