var tp = require('../tsc_printer')

class PrintData {
	_network(data){
		console.log(data)
	}
    _looper(jsonData) {
        let data = jsonData
        jsonData.map((value,key) => {
			tp.printfile(value)
			console.log(value)
        })
    }
}

module.exports = PrintData