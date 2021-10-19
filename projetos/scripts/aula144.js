class Humano{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
    falar(){
        console.log(`O humano falou.`)
    }
}
class Profissional extends Humano{
    constructor(nome, idade, especializacao){
        super(nome,idade);//
        this.profissao="Programador web";
        this.especializacao=especializacao;
    }
}
let wagner = new Profissional("Wagner",36,"JavaScript");
console.log(wagner);
/*Profissional {
    nome: 'Wagner',
    idade: 36,
    profissao: 'Programador web',
    especializacao: 'JavaScript' }*/
wagner.falar(); //O humano falou. >> vem da classe Humano (classe pai)