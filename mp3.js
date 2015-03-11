var http = require('http')
var fs = require('fs')
var path = require('path')
var util = require('util')
var EventEmitter=require('events').EventEmitter
var mp3Files=[]
var mp3FilesEE=new EventEmitter()
mp3FilesEE.on('mp3ListReady',function(){
  console.log("List ready, running server...\n")
  runServer()
});

// read all files from current directory
fs.readdir(process.argv[2],function(err,files){
  if(err) throw err
  for(var i=0;i<files.length;i++)
    if(path.extname(files[i]) == ".mp3")
        mp3Files.push(process.argv[2]+"/"+files[i])
  mp3FilesEE.emit('mp3ListReady')// trigger files_ready event
});

function runServer(){
    http.createServer(function(request, response) {
        var index = Math.floor((Math.random() * (mp3Files.length)))
        var filePath = mp3Files[index]
        console.log("Inizio stream\n"+filePath)
        var stat = fs.statSync(filePath)
     
        response.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size
        });
     
        var readStream = fs.createReadStream(filePath)
        // We replaced all the event handlers with a simple call to util.pump()
        util.pump(readStream, response)
    })
.listen(2000)
}