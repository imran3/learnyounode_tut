//http get di tre url passati come argometo
//poi stampare "data" dei link, nello stesso ordina in cui sono stati passati
var http = require("http")
var bl = require("bl")
var str = []
var ctr = 0
function printRes(){
	for(var i=0; i<3; i++)
		console.log(str[i])
}
function getData(index){
		http.get(process.argv[index+2], function (resp){
			resp.pipe(bl(function (err, data){
				if(err) return console.error(err)
				str[index] = data.toString()
				ctr++
				if(ctr == 3)
					printRes();
			}))
		})
}
for(var i=0; i<3; i++)
	getData(i)
