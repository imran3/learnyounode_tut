//programma che fa http.get di un url passato come argomento
//colleziona tutti i dati ricevuti dal server(non solo "data")
//stampa poi il numero totale di caratteri ricevuti dal server e la stringa completa
var http = require("http")
var bl = require("bl")		//carico il modulo bl che poi uso per concatenare lo stram
var url = process.argv[2]
http.get(url, function callback(response){
	response.pipe(bl(function (err, data){
		if(!err){
		var str = data.toString()
			console.log(str.length)
			console.log(str)
		}
	}))
});