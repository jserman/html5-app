var express = require('express');
var request = require('request');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(200).type('html');
    res.send('/index.html');
})

module.exports = router;