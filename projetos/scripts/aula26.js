/*Deletando propriedades e métodos
- Use a propriedade 'delete', mas essa prática é equivocada, por criar comportamentos anormais, prejudicando a manutenção do código*/
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