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