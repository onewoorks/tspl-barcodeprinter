var tp = require('../tsc_printer')

class PrintData {

    _looper(jsonData) {
        let data = jsonData
        jsonData.map((value,key) => {
            this._tspl(value)
			tp.printfile()
        })
    }

    _tspl(value) {
        console.log('TEXT 120, 20, "128", 100, 2, 0,2, 2 "'+ value.nama_stok +'"')
        console.log('TEXT 120, 20, "128", 100, 2, 0,2, 2 "'+ value.no_tag +'"')
        console.log('TEXT 120, 20, "128", 100, 2, 0,2, 2 "'+ value.pembekal+'"')
    }

}

module.exports = PrintData