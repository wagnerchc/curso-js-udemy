function imprimirDados(obj: {nome:string,idade:number}){
    console.log(`Esta pessoa se chama ${obj.nome} e tem ${obj.idade} anos.`)
}
let pessoa1={nome:'Wagner',idade:36};
let pessoa2={nome:'Aline'};
imprimirDados(pessoa1);
//imprimirDados(pessoa2); //Não será impresso, pois falta um parâmetro
