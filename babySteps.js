var somma = 0;
/*gli argomenti passati da linea di comando finiscono nel array process.argv
è un array di stringhe
argv[0] = node sempre
argv[1] = path completo del file eseguito con node
*/
for(var i=2;i<process.argv.length;i++){
	//Number fa la conversione in numero degli elementi
	somma+= Number(process.argv[i]);//accedo ai numeri e sommo
}
console.log(somma);//console.log stampa sulla console qualcosa