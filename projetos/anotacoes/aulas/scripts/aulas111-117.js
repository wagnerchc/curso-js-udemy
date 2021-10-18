//111 - Adicionando pros e métodos com prototypes
function CarroAula (marca,preco){
    this.marca=marca;
    this.preco=preco;
    this.calota=true;
}
/*let carroBmw = new CarroAula('BMW',100000)
console.log(carroBmw)
CarroAula.prototype.rodas=4
console.log(carroBmw.rodas)
CarroAula.prototype.ligar=function(){
    console.log("O carro ligou")
}
carroBmw.ligar()*/

//112 - Adicionar múltipos pros e métodos - prejudicando a manutenção do código
CarroAula.prototype={
    rodas:4,
    ligarCarroAula(){
        console.log("Carro ligado");
    }
}
let carroBmw = new CarroAula('BMW',100000)
console.log(carroBmw)
console.log(carroBmw.rodas)
carroBmw.ligarCarroAula()
CarroAula.prototype.aro=20 //pode ser criado antes ou depois do objeto
console.log(carroBmw.aro)

//113 - Modificação do prototype
//Todas as instâncias ganham os novos métodos ou propriedades

CarroAula.prototype.tetoSolar=false
console.log(carroBmw.tetoSolar)
CarroAula.prototype.abrirTetoSolar=function(){
    console.log("O teto está aberto")
}
carroBmw.abrirTetoSolar()

//114 - Conflito entre objeto e prototype - As propriedades do objeto sobrepõem às, do prototype

CarroAula.prototype.cor='preto'
let fusca = new CarroAula('VW',10000)
console.log(fusca.cor)
fusca.cor='rosa'
console.log(fusca.cor)
console.log(fusca.calota)

//115 - Utilizar o prototype se já tem prop, após apagar a propriedade correspondente no objeto

CarroAula.prototype.calota=false
delete fusca.calota //deleta a propriedade do objeto
console.log(fusca.calota)

//116 - Verificando propriedades do prototype

console.log(fusca.hasOwnProperty('marca')) //verificar se o objeto possui essa propriedade
console.log(fusca.constructor.prototype.hasOwnProperty('marca'))//verificar se o prototype possui essa propriedade

//117 - Identificando o prop

let conferir = 'marca'

if(fusca.hasOwnProperty(conferir)){
    console.log("A propriedade é do objeto")
}else if(fusca.constructor.prototype.hasOwnProperty(conferir)){
    console.log("A propriedade é do prototype")
}else{
    console.log("Essa propriedade não existe")
}