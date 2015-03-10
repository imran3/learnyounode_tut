var fs = require("fs");//carico il modulo fs di node, serve per caricare il file ecc...
var path = process.argv[2];//prendo il path del file che voglio leggere
var bufferFile = fs.readFileSync(path);//Buffer che tutto il contenuto del file letto
var stringaFile = bufferFile.toString();//converto il buffer a semplice stringa
var lineeFile = stringaFile.split("\n");//array stringhe singole righe
console.log(lineeFile.length-1);//stampo il numero di righe

