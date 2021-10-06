let carro = {
    portas: 4,
    cor: "Vermelha",
    opcionais: ["teto solar","blindagem","ar condicionado"
    ],
    requisito: true,
    ligar (){
        console.log("Ligou")
    }
}

console.log(carro)
console.log(typeof carro)
console.log(carro.portas)
console.log(carro['portas'])
console.log(carro.cor)
console.log(carro['cor'])

carro.tipo = 'SUV'
console.log(carro.tipo)

if(carro.tipo=='SUV'){
    carro.tetosolar=true;
}

console.log(carro)

carro.acelerar = function(){
    console.log('Acelenrando...')
}

carro.acelerar()
delete carro.ligar
//carro.ligar()
console.log(carro)

let pessoa = {
    nome: "Wagner",
    idade: 29,
    falar() {
        console.log("Oi")
    },
    aniversario(){
        this.idade+=1
    },
    dizerIdade(){
        console.log("A minha idade é "+ this.idade)
    },
    podeDirigir(){
        if(this.idade>=18){
            console.log("Pode dirigir")
        } else {
            console.log("Ainda não pode dirigir")
        }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheiro', 'documento', 'moeda']
    }
}

pessoa.aniversario()
console.log(pessoa.idade)
pessoa.aniversario()
console.log(pessoa.idade)
pessoa.dizerIdade()
pessoa.podeDirigir()

pessoa.falar()

console.log(pessoa.caracteristicas)
console.log(pessoa.caracteristicas.carteira[2])

//console.log(typeof pessoa)

let nomePessoa = pessoa['nome']
console.log(nomePessoa.length)

let maquina = {
    material: "Aço inox",
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos[2])

for(let i = 0;i<maquina.equipamentos.length;i++){
    console.log(maquina.equipamentos[i])
}

if(maquina.vaiMontada==false){
    console.log("O comprador precisa montar a máquina")
}

let cavalo = {
    patas: 4,
    "está domesticado": false,
    estaDomesticado: false,
    n: 'agluma coisa'
}

console.log(cavalo)

console.log(cavalo["está domesticado"])
console.log(cavalo.estaDomesticado)

const n = 'patas'
const m = 'está domesticado'

console.log(cavalo[n])
console.log(cavalo.n) //Esse é uma propriedade 
console.log(cavalo['patas'])
console.log(cavalo[m])

let calculadora = {
    numeros: 0,
    somar (a,b) {
        this.numeros = a + b
    },
    subtracao (a) {
        this.numeros-=a
    }
}

calculadora.somar(2,4)
console.log(calculadora.numeros)
calculadora.subtracao(5)
console.log(calculadora.numeros)

let ninja = {
    classe: 'profissional',
    arma: 'shuriken',
    atirarArma (){
        console.log("Atirou a "+this.arma)
    },
    atirarDuasVezes(){
        for(let i=2;i>0;i--){
            this.atirarArma()
        }
    }
}

ninja.atirarArma()
ninja.atirarDuasVezes()

let ninja2 = {
    classe: 'profissional',
    arma: 'kunai',
    atirarArma (){
        console.log("Atirou a "+this.arma)
    }
}

ninja2.atirarArma()

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
ninja2.atirarArma()

function criarCarro(modelo, portas, aro, tetoSolar) {
    return{
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro (){
            console.log("ligou")
        },
        temTetoSolar(){
            if(this.tetoSolar==true){
                console.log("Tem teto solar")
            } else {
                console.log("Não tem teto solar")
            }
        }
    }
}

let ferrari = criarCarro('Ferrari',4,18,true)
console.log(ferrari.modeloDoCarro)
ferrari.ligarCarro()
ferrari.temTetoSolar()

let bmw = criarCarro('BMW',2,16,false)
console.log(bmw.modeloDoCarro)

console.log(window)

