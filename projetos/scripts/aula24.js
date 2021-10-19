/*Objetos dentro de objetos
- Por exemplo, um array associativo*/
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

console.log(pessoa.caracteristicas)
console.log(pessoa.caracteristicas.carteira[2])