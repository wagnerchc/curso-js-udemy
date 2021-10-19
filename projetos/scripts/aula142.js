class Humano {
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    };
    nomeDaPessoa(){
        return `O nome da pessoa é: ${this.nome}`;
    }
    set mudarNomeDaPessoa(novoNome){
        this.nome=`Sr. ${novoNome}`;
    }
    get receberNomePessoa(){
        return `O nome da pessoa é: ${this.nome}`;
    }
}
console.log(typeof Humano); //function
let wagner = new Humano('Wagner', 36);
console.log(wagner); //Humano { nome: 'Wagner', idade: 36 }
console.log(wagner.nomeDaPessoa()); //O nome da pessoa é: Wagner
console.log(wagner.receberNomePessoa); //O nome da pessoa é: Wagner
wagner.mudarNomeDaPessoa = "Udemy";
console.log(wagner.nome); //Sr. Udemy
console.log(wagner.receberNomePessoa); //O nome da pessoa é: Sr. Udemy