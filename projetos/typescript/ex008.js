function imprimirDados(obj) {
    console.log("Esta pessoa se chama " + obj.nome + " e tem " + obj.idade + " anos.");
}
var pessoa1 = { nome: 'Wagner', idade: 36 };
var pessoa2 = { nome: 'Aline' };
imprimirDados(pessoa1);
imprimirDados(pessoa2); //Não será impresso, pois falta um parâmetro