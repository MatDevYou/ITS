console.log(STUDENT)

STUDENT.filter( s => s.nome.length > 6).forEach( s => console.log(s)); //filtra e prende gli studenti che hanno la lunghezza del nome fino a 6

//STUDENT.forEach( s -> FileSystem.out.println(s)) su java si scrive cosi

//for (let i = 0; i < STUDENT.length; i++){
//    console.log(STUDENT[i][1].toUpperCase())
//}

for (const studente of STUDENT){                                                //sarebbe un foreach
  
    const temp = new Studente(studente[0], studente[1])
    console.log(temp.firma())

}



//factory function, prevede una funzione per studente 

function creaStudente ( _nome, _cognome){
    return {
        nome : _nome,
        cognome : _cognome
    }
}


//constructor function
//function studente(_nome, _cognome){

 //       this.nome = _nome;
   //     this.cognome = _cognome;

     //    this.firma = function(){
       //     return this.nome + ' ' + this.cognome;
     //   }
//    }