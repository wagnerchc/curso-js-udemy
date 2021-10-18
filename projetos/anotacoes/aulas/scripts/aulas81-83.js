//81 - Number

let aNumber = 20
let bNumber = new Number(20)

console.log(aNumber)
console.log(bNumber)
console.log(aNumber==bNumber.valueOf)

let cNumber = 12.462

console.log(Number.parseInt(cNumber))
console.log(parseInt(cNumber))

let dNumber = '12.32494162'
console.log(Number.parseFloat(dNumber))
console.log(parseFloat(dNumber))

//82 - Number (continuacao) - MAX_VALUE ou MIN_VALUR ou NaN

console.log(Number)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.NaN)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.NEGATIVE_INFINITY)

//83 - Number (continuacao)
// toFixed() - para arredondar
// toExponencial() - para 
// toPrecision() - para imprimir somente a quantidade de números indicados

console.log(cNumber.toFixed(2))
console.log(cNumber.toPrecision(3))
console.log(aNumber.toExponential())