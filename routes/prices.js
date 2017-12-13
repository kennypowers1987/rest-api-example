var express = require('express');  
var router = express.Router();  
var Price = require('../models/prices');  
router.get('/:time?', function(req, res, next) {  
    if (req.params.id) {  
        Price.getPriceById(req.params.time, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } else {  
        Price.getAllPrices(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    }  
});  
router.post('/', function(req, res, next) {  
    Price.addPrice(req.body, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(req.body); //or return count for 1 & 0  
        }  
    });  
});  
router.delete('/:time', function(req, res, next) {  
    Price.deletePrice(req.params.time, function(err, count) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(count);  
        }  
    });  
});  
router.put('/:time', function(req, res, next) {  
    Price.updatePrice(req.params.time, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);  
        }  
    });  
});  
module.exports = router;  