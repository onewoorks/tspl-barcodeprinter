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
    sampleje: function () {
        console.log('run sample')
    },
    printfile: function (data) {
        var label_variable = { quantity: '1', copy: '1' };
        openport('', true);
        var status = printer_status(100, true);
        clearbuffer('', true);
        sendcommand('TEXT 252,24,"1.EFT",0,1,1,"(' + data.mutu + ') '+data.nama_stok + '"', true);
        sendcommand('TEXT 252,44,"1.EFT",0,1,1,"B:' + data.berat +', U:'+ data.modal_upah +'"', true);
        sendcommand('TEXT 252,64,"1.EFT",0,1,1,"' + data.pembekal + '"', true);
        sendcommand('BARCODE 20,23,"128",38, 2,0,2,2,"'+ data.no_tag +'"', true);
        printlabel(label_variable, true);
        closeport('', true);
    }


}

