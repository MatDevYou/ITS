//funzione data larghezza e altezza ci dica se la view è in modalità landscape o portrait

console.log( isLandscape(768, 1024)) //false
console.log( isLandscape(1024, 768)) //true

function isLandscape (a, b){
    if ( a > b){
        return true
    } else {
       return false
    }
}


// function isLandscape (a, b){
//     return a => b
// }

