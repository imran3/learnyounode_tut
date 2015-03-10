var fs = require("fs");
var path = require("path");	
module.exports = function(dirPath, filter, callback){
	var filtredFiles = [];
	var dir = fs.readdir(dirPath,
		function callback(err, data){
			if(err) return callback(err);
			for(var i=0;i<data.length;i++)
				if(path.extname(data[i]) == "."+filter)
					filtredFiles.push(data[i]);
			return callback(null, filtredFiles);
		});
}