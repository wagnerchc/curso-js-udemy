/*119 - Checando se o prototype é de algum objeto*/

let equipamentosDoCarro={
    preco:11000,
    calota:true,
    cor:'azul',
    aro:16
}

let maisEquipamentosDoCarro={
    tetoSolar:'true'
}

function CarroAula3(marca){
    this.marca=marca;
}

console.log(equipamentosDoCarro)
console.log(maisEquipamentosDoCarro)

CarroAula3.prototype = equipamentosDoCarro //isso só funciona se for colocado antes do objeto

let cg = new CarroAula3('Honda')
console.log(cg)
console.log(equipamentosDoCarro.isPrototypeOf(cg))

CarroAula3.prototype = maisEquipamentosDoCarro //isso não vai funcionar pois foi adicionado após a criação do objeto

console.log(maisEquipamentosDoCarro.isPrototypeOf(cg))