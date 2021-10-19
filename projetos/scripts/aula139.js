class Humano{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
}
console.log(typeof Humano); //function
let wagner = new Humano('Wagner', 36);
console.log(wagner); //Humano { nome: 'Wagner', idade: 36 }