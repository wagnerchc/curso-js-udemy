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

function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira', true)
console.log(laranjeira)
console.log(laranjeira.constructor)

function heroi(nome, classe){
    this.nome=nome;
    this.classe=classe;
}

let jaspion=new heroi('Jaspion','robo')
console.log(jaspion)
console.log(jaspion.constructor)

console.log(laranjeira instanceof criarArvore)
console.log(laranjeira instanceof Object)

console.log(jaspion instanceof heroi)

let arr=[

]

console.log(arr instanceof Array)

let obj = {
    numero: 1,
}

console.log(obj.numero)

let copia = obj

console.log(copia.numero)

copia.numero=5

console.log(obj.numero)
console.log(copia.numero)

function ninjaNovo(nome,arma){
    this.nome=nome;
    this.arma=arma;
}

const naruto=new ninjaNovo('Naruto','shuriken')
const rocklee=new ninjaNovo('Rock Lee','punhos')
const cloneDoNaruto=new ninjaNovo('Naruto','shuriken')
const cloneVerdadeiroDoNaturo = naruto

console.log(naruto===rocklee)
console.log(naruto===cloneDoNaruto)
console.log(naruto===cloneVerdadeiroDoNaturo)
console.log(naruto.nome===cloneDoNaruto.nome)

let rodas=4
let portas=4
let aro=20
let tetoSolar=true

let t="tipo_de_"

let carroNovo={
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouto: true,
    [t+"carro"]: "Sedan",
    ligar(){
        console.log("O carro ligou")
    },
    desligar: function(){
        console.log("Carro desligado")
    }
}

let barco={
    [t+"barco"]: "Lancha"
}

let aviao={
    [t+"aviao"]: "Boeing"
}

console.log(carroNovo)
carroNovo.ligar()
carroNovo.desligar()
console.log(carroNovo.tipo_de_carro)
console.log(barco.tipo_de_barco)
console.log(aviao.tipo_de_aviao)

let novaPessoaBonita={
    nomeDaPessoa:'Wagner',
    getNomeDaPessoa(){
        console.log("Esse é o nome do objeto pai "+this.nomeDaPessoa)
    }
}

console.log(Object.getOwnPropertyDescriptor(novaPessoaBonita,'nomeDaPessoa'))

let novaPessoaBonita2={
    idade: 99,
    nomeDaPessoa:'Teste'
}

Object.assign(novaPessoaBonita2,novaPessoaBonita)

console.log(novaPessoaBonita2)

novaPessoaBonita2.getNomeDaPessoa()

novaPessoaBonita2.nomeDaPessoa='Aline'

console.log(novaPessoaBonita2.nomeDaPessoa)

novaPessoaBonita2.nomeDaPessoa='Wagner'

console.log(novaPessoaBonita2.nomeDaPessoa===novaPessoaBonita.nomeDaPessoa) // esse compara um atributo/comportamento do objeto, por isso podem ser idênticos

console.log(novaPessoaBonita2===novaPessoaBonita) //esse compara o objeto como um todo, por isso é falso

let obj1={
    a:1
}
let obj2={
    a:1
}
console.log(Object.is(obj1,obj2))//falso
console.log(Object.is(NaN,NaN))//verdadeiro
console.log(NaN===NaN)//falso
console.log(Object.is(+0,-0))//falso
console.log(+0===-0)//verdadeiro

let testeObj3 = obj2

console.log(Object.is(testeObj3,obj2))//verdadeiro
console.log(testeObj3===obj2)//verdadeiro

let carroNovoHoje={
    portasFacil:5,
    aroFacil:20.5,
    tetoSolarFacil:true,
    bancoFacil:'couro sintético'
}

let{portasFacil,aroFacil,tetoSolarFacil,bancoFacil}=carroNovoHoje

console.log(portasFacil)
console.log(aroFacil)
console.log(tetoSolarFacil)
console.log(bancoFacil)

portasFacil=3

console.log(portasFacil)

let trator={
    portasTrator:2,
    aroTrator:180,
    tetoSolarTrator:true,
    bancoTrator:'couro'
}

console.log(trator.portasTrator)

let portasTrator=1

console.log(portasTrator)

//({portasTrator}=trator)

console.log(trator.portasTrator)

let destructuringFrutas=['banana','laranja','maça']
let [banana,l1,m1]=destructuringFrutas
console.log(m1)

let destructuringFrutasRest=['banana','laranja','maça',54,86,49,37,55,01,0001,18530]
let [frutas1,...outrasFrutas]=destructuringFrutasRest
console.log(frutas1)
console.log(outrasFrutas)