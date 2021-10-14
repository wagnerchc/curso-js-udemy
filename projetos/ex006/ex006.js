//helpers
function compareObjs(obj1,obj2){
    if(obj1 instanceof obj2){
        console.log(`O objeto ${obj1.nome} é uma instância de ${obj2.name}`)
    } else {
        console.log(`O objeto ${obj1.nome} não é uma instância de ${obj2.name}`)
    }
}

//objs
function Ninja(nome,arma,quantidade){
    this.nome=nome
    this.arma=arma
    this.quantidade=quantidade
    this.atirarShiruken=function(inimigo){
        n=this.quantidade
        if(n>0){
            console.log('O ninja atirou')
            this.quantidade --
            inimigo.vivo=false
        }else{
            console.log('Acabaram as shirukens')
        }
    }
}

function Inimigo(nome){
    this.nome=nome
    this.vivo=true
}

let inimigo1 = new Inimigo('Orochimaru')
let ninja1=new Ninja('Naruto','Shuriken',3)

console.log(ninja1)
console.log(inimigo1)

ninja1.atirarShiruken(inimigo1)

console.log(inimigo1)

compareObjs(ninja1,Ninja)
compareObjs(ninja1,Inimigo)