let carro = {
    tipo: "SUV",
    ligar (){
        console.log("Ligou")
    }
}

console.log(carro.tipo)

delete carro.tipo
delete carro.ligar

console.log(carro.tipo)

console.log(carro)