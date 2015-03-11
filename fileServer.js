var fs = require("fs")
var http = require("http")
var portNumber = process.argv[2]
var server = http.createServer(function (req, res){
	res.writeHead(200,{'content-type':'text/plain'})
	fs.createReadStream(process.argv[3]).pipe(res);
})
server.listen(portNumber)