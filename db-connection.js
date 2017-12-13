var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Abc123!!",
    port: "3306",
    database: "test"
});
module.exports = connection;