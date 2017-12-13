var db = require('../db-connection.js'); //reference of dbconnection.js  
var Price = {  
    getAllPrices: function(callback) {  
        return db.query("Select * from test", callback);  
    },  
    getPriceById: function(time, callback) {  
        return db.query("select * from test where time=?", [id], callback);  
    },  
    addPrice: function(Price, callback) {  
        return db.query("Insert into test values(?,?,?)", [Price.symbol, Price.price, Price.size, Price.time], callback);  
    },  
    deletePrice: function(time, callback) {  
        return db.query("delete from test where time=?", [time], callback);  
    },  
    updatePrice: function(time, Price, callback) {  
        return db.query("update test set symbol=?,price=?,status=? where time=?", [Price.symbol, Price.price, Price.size, time], callback);  
    }  
};  
module.exports = Price;  