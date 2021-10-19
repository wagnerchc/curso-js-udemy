/*O objeto window
- O this quando é usado fora de função ou propriedades fará referência ao window
- O let e const não inserem no escopo windows. Por outro lado, function e var aparecem na variável global.*/
console.log(window)

var teste = 'oi'

console.log(window)

console.log(this.teste)

let teste2 = 'oi'
const teste3 = 'oi'

console.log(window)

function testando(){
    console.log('teste')
}

console.log(window)