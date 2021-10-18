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