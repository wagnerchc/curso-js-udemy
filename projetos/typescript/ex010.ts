class Humano{
    nome:string;
    idade:number;
    constructor(nome:string, idade:number){
        this.nome=nome;
        this.idade=idade;
    }
    apresentarHumano(){
        return `O nome deste humano é ${this.nome} e ele tem ${this.idade}.`;
    }
}
let wagner=new Humano('Wagner',36);
console.log(wagner);
console.log(wagner.apresentarHumano());