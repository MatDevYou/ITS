//array

const tennisti = [
    'sinner',
    'djokovic',
    'alcaraz',
    'mevdev',
    'rublev',
    'zverev',
    'rune',
    'hurkacz',
]

//tenninisti.forEach(t => console.log(t))

// for(let i = 0; i < tennisti.length; i++){
//     console.log(tennisti[i])
// }

let counter = 0
const TITOLO = document.getElementById('titolo')

function show(){
    TITOLO.textContent = tennisti[counter]
}

function incrementa(){
    counter++
    if ( counter == tennisti.length){
        counter = 0
    }
    show()
}

function decrementa(){
    counter--
    if (counter < 0){
        counter = tennisti.length - 1
    }
    show()
}

document.body.onload = show //quando viene caricato applica una funzione




