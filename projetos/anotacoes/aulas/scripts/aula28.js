function Ninja(nome,arma){
    this.nome=nome;
    this.arma=arma;
    this.atirarArma=function(){
        console.log("Atirou a "+this.arma)
    }
}

let Ninja0 = new Ninja('Naruto','shuriken');
console.log(Ninja0.nome)
let Ninja1 = new Ninja('Sasuke','kunai')
console.log(Ninja1.nome)

Ninja0.atirarArma()
Ninja1.atirarArma()