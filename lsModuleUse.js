var lsModule = require("./lsModule.js");
var dir = process.argv[2];
var ext = process.argv[3];
lsModule(dir,ext, function callback(err, data){
	if(err)
		console.log("errore");
	else
		for(var i=0;i<data.length;i++)
			console.log(data[i]);
});