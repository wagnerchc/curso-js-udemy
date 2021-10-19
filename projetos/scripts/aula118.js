/*118 - Loop para objetos
for('propriedade' in 'nome-da-propriedade'){}*/

function CarroAula2(marca,preco,cor,aro){
    this.marca=marca;
    this.preco=preco;
    this.calota=true;
    this.cor=cor;
    this.aro=aro;
}

let newFusca = new CarroAula2('VW',10000,'vermelho',18)

/*percorre todas as propriedades do objeto*/
for(prop in newFusca){
    console.log(prop+' => '+newFusca[prop])
}