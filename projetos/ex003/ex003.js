function Ninja(nome,arma){
    this.nome=nome
    this.arma=arma
    this.atirarShiruken=function(){
        console.log('O ninja atirou')
    }
}

let ninja1=new Ninja('Naruto','Shuriken')
console.log(ninja1)
ninja1.atirarShiruken()