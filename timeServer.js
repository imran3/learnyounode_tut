/*Time Server
creare un server TCP usando modulo net
net.createServer restituisce un serve e accetta un funzione di callback
function(socket) è quello che soddisfa le richiete dei clienti
posso fare socket.write(dati), socket.read(dati)...
per fare prova usare telnet
telnet localhost numeroPortaServer*/
var net = require("net")	//modulo net per connesione con rete, senza usare http
var strftime = require('strftime')//modulo per avere date nel formato fico
var portNumber = process.argv[2]
var timeServer = net.createServer(function (socket){
	//console.log("Client connesso")
	//console.log("mando data al cliet.")
	//socket.write("La data di oggi è")
	socket.write("<html><head><title>Benvenuto</title></head><body><h1 background='red'>Ciao Fabbbiooo</h1><h2>Sono precisamente le ")
	socket.write(strftime("%H:%M:%S")+" e la data di oggi e'"+strftime("%d/%m/%Y"))
	//socket.write(strftime('%Y-%m-%d %H:%M'))
	socket.write("</h2></body></html>")
	socket.end()
	//listener di fine connesione con client
	/*socket.on("end", function(){
		console.log("Connesione con client terminata.")
	})*/
})
timeServer.listen(portNumber)	//il server ascolta le richiesta sulla porta indiciata