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

//Aula 74 - Object()

let o1 = {}
let o2 = new Object()
console.log(o1)
console.log(o2)

o1.nome="JavaScript"
o2.nome="HTML5"

console.log(o1.valueOf())
console.log(o2.valueOf())

console.log(o1.toString())
console.log(o2.toString())

//Aula75 - Array

let a75 = [0,1,2]
let b75 = new Array(3,4,5)

console.log(a75,b75)
console.log(a75.toString())
console.log(b75.toString())
console.log(a75 instanceof Array)
console.log(b75 instanceof Object)
console.log(Array instanceof Object)

//76 - Array (continuação)

console.log(a75.length)
console.log(b75.length)

a75.push(4)
b75.push(5)
console.log(a75,b75)

a75.pop()
b75.pop()
console.log(a75,b75)

//77 - Function

function testeFuncao(a){
    return a;
}
console.log(testeFuncao('oi'))

//Não é aconselhável fazer função com new
teste2=new Function(
    'a',
    'return arguments'
)
console.log(teste2('testando'))

//78 - Function (continuação) - número de argumentos de uma função

function testeFuncao2(a,b){
    return a + b
}

console.log(testeFuncao2.length) // resultará em: 2, porque tem dois argumentos
console.log(testeFuncao2.toString())
console.log(testeFuncao2 instanceof Function)
console.log(Function instanceof Object)

//79 - Function (continuação) - call e apply
//call - pega métodos empregados de objetos
//apply - todos os parâmetros são transformados em arrays

let aNome={
    nome:"JavaScript",
    dizerNomeSalvo(){
        console.log(`O nome deste objeto é ${this.nome}`)
    }
}

let bNome={
    nome:"HTML5"
}

aNome.dizerNomeSalvo()
aNome.dizerNomeSalvo.call(bNome)

//80 - Boolean (true e false) .valueOf()

let aBoolean = true
let bBoolean = new Boolean(false)
console.log(aBoolean)
console.log(bBoolean)
console.log(bBoolean.valueOf())
console.log(aBoolean instanceof Boolean) // boolean !=Boolean
console.log(aBoolean.valueOf())

//81 - Number

let aNumber = 20
let bNumber = new Number(20)

console.log(aNumber)
console.log(bNumber)
console.log(aNumber==bNumber.valueOf)

let cNumber = 12.462

console.log(Number.parseInt(cNumber))
console.log(parseInt(cNumber))

let dNumber = '12.32494162'
console.log(Number.parseFloat(dNumber))
console.log(parseFloat(dNumber))

//82 - Number (continuacao) - MAX_VALUE ou MIN_VALUR ou NaN

console.log(Number)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NEGATIVE_INFINITY)

//83 - Number (continuacao)
// toFixed() - para arredondar
// toExponencial() - para 
// toPrecision() - para imprimir somente a quantidade de números indicados

console.log(cNumber.toFixed(2))
console.log(cNumber.toPrecision(3))
console.log(aNumber.toExponential())

//84 - String
//.length - número de caracteres
//.length[] - acessar os caracteres como se fosse um array

let s1 = new String('teste')
let s2 = 'TESTANDO'

console.log(s1.length)
console.log(s2.length)

console.log(s1[2])
console.log(s2[6])

//85 - String (continuação)
//.toUpperCase()
//.toLowerCase()
//.charAt()
//.indezOf()

console.log(s1.toUpperCase())
console.log(s2.toLowerCase())
console.log(s2.charAt(5))
console.log(s2[5])
console.log(s2.indexOf('D')) //case sensitive

//86 - String (continuação)
//.slice(i,f) - exclui caracteres de início e fim
//.substring(i,f) - retorna o que foi indicado no início e fim
//.split("") - explode a string em array

let frase = "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Manduma pindureta quium dia nois paga. Casamentiss faiz malandris se pirulitá. Quem num gosta di mim que vai caçá sua turmis!"

console.log(frase.slice(2,6))
console.log(frase.split(" "))
console.log(frase.substring(2,6))

//87 - Math
//Math.PI
//Math.LN2
//Math.random() - número aleatório

console.log(Math.PI)
console.log(Math.LN2)//logaritmo natural de 2
console.log(Math.LN10)//logaritmo natural de 10
console.log(Math.random())//número aleatório de 0 a 1
console.log(Math.floor(Math.random()*11)) // 0 a 10

//88 - Math (continuação)
//Math.floor - arredonda para baixo
//Math.ceil - arredonda para cima
//Math.pow - potência

console.log(Math.floor(12.384))
console.log(Math.ceil(12.384))
console.log(Math.pow(2,2))
console.log(Math.pow(12,5))
console.log(Math.sqrt(16))

//89 - Date
//Date()
//Date(yyyy,mm,dd)

console.log(new Date())
console.log(new Date(2022,10,21))
console.log(new Date(01578900050000))

//90 - Date (continuação)
let dataTeste = new Date()
console.log(dataTeste.setMonth(1))
console.log(new Date(dataTeste.setMonth(11)))
console.log(Date.parse('Apr 22, 2019'))
console.log(Date.now())
console.log(new Date(Date.now()))

//91 - RegExp - expressões regulares
let palavra = new RegExp(/aS/)
console.log(palavra.test("Bola"))
console.log(palavra.test("JavaScript"))
console.log(palavra.test("HMTL5"))

//92 - Error - tratar erros, por que é um objeto
try {
    throw new Error("Deu um problema no código")
} catch(e) {
    console.log(`${e.name}: ${e.message}`)
}

//110 - Propriedade prototype
function abc() {
    console.log('teste');
}
abc()
console.log(abc.prototype)
console.log(typeof abc.prototype)
abc.prototype.teste=1
console.log(abc.prototype.teste)

//111 - Adicionando pros e métodos com prototypes
function CarroAula (marca,preco){
    this.marca=marca;
    this.preco=preco;
}
let carroBmw = new CarroAula('BMW',100000)
console.log(carroBmw)
CarroAula.prototype.rodas=4
console.log(carroBmw.rodas)
CarroAula.prototype.ligar=function(){
    console.log("O carro ligou")
}
carroBmw.ligar()

//112 - Adicionar múltipos pros e métodos - prejudicando a manutenção do código
CarroAula.prototype={
    banco:'couro',
    ligarPiscaEsquerdo(){
        console.log("Ligou pisca do lado esquerdo");
    }
}
console.log(carroBmw.banco)