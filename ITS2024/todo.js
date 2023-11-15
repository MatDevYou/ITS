const INPUT = document.getElementById('cosadafare')
const BTN = document.getElementById('aggiungi')
const LISTA = document.getElementById('lista')

BTN.onclick = function () { //collego il valore che scriverò nella lista che ho creato
    console.log(INPUT.value)

    const LI = document.createElement('li')
    LI.textContent = INPUT.value
    LISTA.append(LI)
    INPUT.value = ''
}