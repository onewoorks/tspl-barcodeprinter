'use strict';

var edge = require('edge-js');
var express = require('express');
var bodyParser = require('body-parser')
const util = require('util');
var fs = require('fs');
var https = require('https');

var PrintData = require('./src/print_data.js')
var pd = new PrintData()
var app = express();
var cors = require('cors');

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
app.use(cors({origin:'*'}))

app.listen(8888, function () {
    console.log("Server Start!!");
})

app.get('/online_check', function (req, res){
    res.send({status:"200"})
});

app.post('/test', function(request, response){
	pd._looper(request.body);
	response.send({
		message: 'telah dicetak pada pencetak barcode!!!'
	})
});

app.post('/',function (req, res) {
   //printfile();
     res.redirect(req.get('referer'));
     console.log(req);
 });

https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
}, app).listen(3000,()=>{
	console.log('https is listening...')
})
