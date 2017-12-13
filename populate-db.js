var path = require("path");
var db = require("./db-connection.js");
var http = require("./http-service.js");
var data = [];
var flattenedData = [];

http
    .get()
    .then(response => {
        data = response.data;
        connectToSql();
    })
    .catch(error => {
        console.log(error);
    });

//Establish MySQL connection
function connectToSql() {
    db.connect(function (err) {
        if (err)
            throw err
        else {
            console.log("Connected to MySQL");
            db.query("CREATE DATABASE IF NOT EXISTS test", function (err, result) {
                if (err) throw err;
                console.log(result);
            });
            var sql = "CREATE TABLE IF NOT EXISTS `test` (symbol VARCHAR(65), price DECIMAL(65), size DECIMAL(65), time DECIMAL(65))";
            db.query(sql, function (err, result) {
                if (err) throw err;
                console.log("table created");
                addToDb();
            });
        }
    });
};

function addToDb() {
    console.log("adding to db");
    for (var i = 0; i < data.length; i++) {
        flattenedData.push([data[i].symbol, data[i].price, data[i].size, data[i].time]);
    }
    // insert into db
    db.query("INSERT INTO test (symbol, price, size, time ) values ?", [flattenedData], function (err, result) {
        if (err) {
            throw err;
        }
        else {
            console.log(result);
        }
    });
};