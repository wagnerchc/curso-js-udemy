/*Outro problema ao copiar por loop
- Os arrays do pai são afetados pelos arrays do filho, por passagem de referência*/
function extend(Filho,Pai){
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for (let i in paiProto) {
        filhoProto[i] = paiProto[i];
    }
    //filho tem acesso ao obj pai
    filhoProto.uber = paiProto;
}
function Veiculo (){}
Veiculo.prototype.carenagem='aço'
Veiculo.prototype.itens=['teto solar','turbo']
Veiculo.prototype.ligar=function(){
    console.log('O veículo ligou!');
}
function Trem (tipo){
    this.tipo=tipo;
}
Trem.prototype.vagoes=50

function Carro(){}
Carro.prototype.pneus=4
extend(Trem,Veiculo)
extend(Carro,Veiculo)
//Carro.prototype=Veiculo.prototype
Trem.prototype.itens.push('janelas')
let trembala = new Trem('Trem bala')
let trem = new Trem('Trem')
let ferrari = new Carro()
let fusca = new Veiculo()
Carro.prototype.ligar=function(){
    console.log("Carro ligado")
}
Trem.prototype.ligar=function(){
    console.log("Trem ligado")
}
trembala.ligar()
trem.ligar()
ferrari.ligar()
fusca.ligar()

console.log(trembala.itens)
console.log(fusca.itens)