//stampa lista dei file in una cartella, filtrando per estensione
//accetta path cartella e la estensione del file
var fs = require("fs");			//usato per leggere i file di una cartella
var path = require("path");		//modulo path usato per prendere estensione del file
var dirPath = process.argv[2];	//percorso cartella da ispezionare
var est = process.argv[3];//estensione da cercare
//lettura ascyncrona della cartella fs.readdir(pathname, function callback(err, data))
var dir = fs.readdir(dirPath,
	function callback(errore, files){
		if(!errore){
			for(var i=0;i<files.length;i++){
				if(path.extname(files[i]) == "."+est)//verifico se estensione combacia con quella indicata
					console.log(files[i]);//se si stampo il nome del file
			}
		}
	});