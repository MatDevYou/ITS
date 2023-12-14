class Dado {

    constructor(nFacce, nColore){
        this.facce = nFacce;
        this.colore = nColore;
    }

    lancia(){
        return Math.ceil( Math.random() * this.facce );
    }

}