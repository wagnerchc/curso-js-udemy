let Humano = class{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    };
    nomeDaPessoa(){
        return `O nome da pessoa é: ${this.nome}`;
    }
}
console.log(typeof Humano); //function
let wagner = new Humano('Wagner', 36);
console.log(wagner); //Humano { nome: 'Wagner', idade: 36 }
console.log(wagner.nomeDaPessoa()); //O nome da pessoa é: Wagner