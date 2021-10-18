//127 - Métodos e props no Prototype
//Usar para constantes ou métodos
//Quando muda o valor para o filho, muda para o pai
//Otimiza o uso da memória do computador, pois não cria objetos com muitas propriedades e métodos

function Casa(){}
Casa.prototype.janela=true
Casa.prototype.porta='madeira'
Casa.prototype.garagem=true
Casa.prototype.jardim=true
Casa.prototype.chuveiro=true
Casa.prototype.luz=function(){
    console.log("Precisa pedir instalação")
}
function Apartamento(){
    this.agua=true
}
Apartamento.prototype.churrasqueira=true
Apartamento.prototype=new Casa()//criada a referência
let casa1=new Casa()
let apto1=new Apartamento()
casa1.luz()
apto1.luz()