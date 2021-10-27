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
class Ninja extends Humano{
    classe:string;
    constructor(nome:string,idade:number,classe:string){
        super(nome,idade);
        this.classe=classe;
    }
    atirarEstrelaNinja(){
        console.log(`O ninja atirou a shuriken.`)
    }
}
let ninja1=new Ninja('Naruto',36,"Hokage");
console.log(ninja1);
console.log(ninja1.apresentarHumano());
console.log(ninja1.atirarEstrelaNinja());