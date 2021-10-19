/*Isolando a herança em uma função*/
function extend(Filho,Pai){
    let F = function(){};
    Filho.prototype=Pai.prototype;
    Filho.prototype=new F();
}
function Veiculo (){}
Veiculo.prototype.carenagem='aço'
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