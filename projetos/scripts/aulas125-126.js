/*125 - Prototype chain*/

function Veiculo(){
    this.carenagem='aço';
    this.ligar=function(){
        console.log("Veículo ligado")
    }
}

function Trem(){
    this.tipo='trem';
    this.vagoes=50;
}

function CarroAula4(){
    this.pneus=4;
}

Trem.prototype=new Veiculo()
CarroAula4.prototype=new Veiculo()//precisa colocar antes do objeto

let trembala=new Trem()
trembala.ligar()
let ferrari2 = new CarroAula4()
ferrari2.ligar()

/*126 - Checando a herança*/
console.log(ferrari2 instanceof Veiculo) //true
console.log(trembala instanceof Veiculo) //true
console.log(trembala instanceof CarroAula4) //false
console.log(CarroAula4 instanceof Veiculo) //false
console.log(trembala instanceof Object) // true
console.log(Veiculo instanceof Object) // true
console.log(CarroAula4 instanceof Object) //true