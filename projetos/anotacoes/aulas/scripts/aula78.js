//78 - Function (continuação) - número de argumentos de uma função

function testeFuncao2(a,b){
    return a + b
}

console.log(testeFuncao2.length) // resultará em: 2, porque tem dois argumentos
console.log(testeFuncao2.toString())
console.log(testeFuncao2 instanceof Function)
console.log(Function instanceof Object)