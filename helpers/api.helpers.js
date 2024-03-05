const axios = require("axios");
const {TEST_URL}=require("../config/endpoints")

const sendRequest = async (url, data = null, method = "get") => {
    //console.log(`${TEST_URL}/${url}`+"<<<< Test URL");
    try {
        const response = await axios({
            method,
            url: `${TEST_URL}/${url}`,
            headers: {},
            data
        });
        return {
            status: response.status,
            data: response.data
        };
    }
    catch (error) {
        return {
            status: error.response.status
        };
    }
};

module.exports = {
    sendRequest
}