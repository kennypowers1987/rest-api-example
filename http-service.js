var axios = require("axios");
const url = "https://api.iextrading.com/1.0/tops/last";
var HTTP = axios.create({
    baseURL: url,
});
module.exports = HTTP;