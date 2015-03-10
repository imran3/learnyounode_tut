//lettura ascincrona del file e dice numero di righe del file
var fs = require("fs");//richiedo il modulo fs di node
/*uso reaFIle(path, funciton callaback(err, data)); per leggere file in modo asicrono
readfile accetta due argomenti: 1) path del file
2)funzione di callback che viene eseguita quando finisce la lettura asincrona
due paramentri: errore e contenuto
*/
fs.readFile(process.argv[2], 
	function callback(err, data){
		//se non ci sono stati errori
		if(!err){
			var numeroLinee= data.toString().split("\n").length-1;
			console.log(numeroLinee);
		}
	});
