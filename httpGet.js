//fare una get usando http e stampare il risultato in stringa
//uso modulo http di node, chiamo metodo get di http, questo accetta url e callback
//callback mi da un response che contine diversi events
//alcuni events sono "error", "data", "end"
var http = require("http")
var url = process.argv[2]
http.get(url,function callback(response){
	response.setEncoding("utf8")	//response is string in utf8 and not a Buffer
	response.on("data", console.log)
	response.on("error", console.error);
	/*var data = response.on("data", function(data){
		console.log(data)
	});*/
});