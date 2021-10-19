/*Object literals
- ES6 (ECRASCRIPT2015) permite criar objetos mais rapidamente, porque é possível utilizar os nomes das variáveis como nomes das propriedades
- Também não é necessário declarar function:, por onta do ES6, igualmente, ocorre em outras linguagens orientadas ao objeto
- Também é possível criar propriedades com variáveis e retorno de funções, visando escrever menos código*/
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