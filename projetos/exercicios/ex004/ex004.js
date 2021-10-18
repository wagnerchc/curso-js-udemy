function Ninja(nome,arma,quantidade){
    this.nome=nome
    this.arma=arma
    this.quantidade=quantidade
    this.atirarShiruken=function(){
        n=this.quantidade
        if(n>0){
            console.log('O ninja atirou')
            this.quantidade --
        }else{
            console.log('Acabaram as shirukens')
        }
    }
}

let ninja1=new Ninja('Naruto','Shuriken',3)
console.log(ninja1.quantidade)
ninja1.atirarShiruken()
console.log(ninja1.quantidade)
ninja1.atirarShiruken()
console.log(ninja1.quantidade)
ninja1.atirarShiruken()
console.log(ninja1.quantidade)
ninja1.atirarShiruken()
console.log(ninja1.quantidade)