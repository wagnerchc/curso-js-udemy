let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma (){
        console.log("Atirou a "+this.arma)
    },
    atirarMaisVezes(){
        for(let i=5;i>0;i--){
            this.atirarArma()
        }
    }
}

let ninja2 = {
    classe: 'profissional',
    arma: 'kunai',
    atirarArma (){
        console.log("Atirou a "+this.arma)
    }
}

ninja.atirarArma()
ninja.atirarMaisVezes()

ninja2.atirarArma()