var volte = 10
var facce = 6
var punteggio = 0

for(var i = 0; i < volte; i++){
var dado1 = Math.floor( Math.random() * facce) + 1
var dado2 = Math.floor( Math.random() * facce) + 1

//console.log("dado1: " + dado1);
//console.log("dado2: " + dado2);

if (dado1 == dado2){
    punteggio++;
    console.log("hai vinto");
}


}

console.log("hai fatto " + punteggio + " punti su " + volte + " lanci")