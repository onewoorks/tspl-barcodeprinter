var edge = require('edge-js');

var about;
var openport;
var sendcommand;
var clearbuffer;
var printerfont;
var barcode;
var printlabel;
var closeport;
var printer_status;

try {
    openport = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'openport'
    });
}
catch (error) {
    console.log(error);
}


try {
    about = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'about'
    });
}
catch (error) {
    console.log(error);
}

try {
    sendcommand = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'sendcommand'
    });
}
catch (error) {
    console.log(error);
}


try {
    clearbuffer = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'clearbuffer'
    });
}
catch (error) {
    console.log(error);
}


try {
    printerfont = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'printerfont'
    });
}
catch (error) {
    console.log(error);
}


try {
    barcode = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'barcode'
    });
}
catch (error) {
    console.log(error);
}



try {
    printlabel = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'printlabel'
    });
}
catch (error) {
    console.log(error);
}


try {
    closeport = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'closeport'
    });
}
catch (error) {
    console.log(error);
}


try {
    printer_status = edge.func({
        assemblyFile: 'tsclibnet.dll',
        typeName: 'TSCSDK.node_usb',
        methodName: 'printerstatus_string'
    });
}
catch (error) {
    console.log(error);
}


var te = "alaa";

module.exports = {
	sampleje: function(){
		console.log('run sample')
	},
	printfile: function(){
    var font_variable = { x: '50', y: '50', fonttype: '3', rotation: '0', xmul: '1', ymul: '1', text: 'Font Test' }
    var barcode_variable = { x: '50', y: '100', type: '128', height: '70', readable: '0', rotation: '0', narrow: '3', wide: '1', code: '123456' }
    var label_variable = { quantity: '1', copy: '1' };
    openport('', true);
    var status = printer_status(100, true);
    clearbuffer('', true);
    printerfont(font_variable, true);
    barcode(barcode_variable, true);
    sendcommand('TEXT 250,50,\"0\",0,10,10,\"Text Test!!\"', true);
    printlabel(label_variable, true);
    closeport('', true);
}

	
}
