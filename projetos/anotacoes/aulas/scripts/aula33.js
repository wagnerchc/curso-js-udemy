/*Referência de objeto
- Ao atribuir uma variável a outra variável, ocorrerá a passagem de referência e, consequentemente, a alteração da segunda variável terá impacto na primeira, por conta da passagem dela como referência*/
let obj = {
    numero: 1,
}

console.log(obj.numero)

let copia = obj

console.log(copia.numero)

copia.numero=5

console.log(obj.numero)
console.log(copia.numero)

obj.numero=2

console.log(copia)