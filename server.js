'use strict';

var edge = require('edge-js');
var express = require('express');
var bodyParser = require('body-parser')
const util = require('util');

var PrintData = require('./src/print_data.js')
var pd = new PrintData()
var app = express();


var about;
var openport;
var sendcommand;
var clearbuffer;
var printerfont;
var barcode;
var printlabel;
var closeport;
var printer_status;

 app.use(express.static('./'));
//var app = express();
app.use(express.json());

app.listen(8888, function () {
    console.log("Server Start!!");
})

app.get('/test_get', function (req, res) {
    console.log('GET Function Test!!');
});

app.post('/test', function(request, response){
	pd._looper(request.body);
});

app.post('/',function (req, res) {
   //printfile();
     res.redirect(req.get('referer'));
     console.log(req);
 });

