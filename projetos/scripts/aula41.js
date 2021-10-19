/*Destructuring
- Criar variáveis com propriedades de um objeto, utilizando o mesmo nome:
- Também é possível utilizar o destructuring para alterar valor das propriedades de outra varíavel
- Também funciona com arrays
- Rest operator do Destructuring
- Usa ...rest para as demais variáveis do array, especialmente, quando não se sabe quantos valores estão no array
- Atribuição via desestruturação (destructuring assignment) - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment*/
let carro={
    portasFacil:5,
    aroFacil:20.5,
    tetoSolarFacil:true,
    bancoFacil:'couro sintético'
}

let{portasFacil,aroFacil,tetoSolarFacil,bancoFacil}=carro

console.log(portasFacil)
console.log(aroFacil)
console.log(tetoSolarFacil)
console.log(bancoFacil)