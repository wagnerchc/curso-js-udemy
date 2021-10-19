/*Atributos das propriedades
- Para saber se a propriedade é modificável, usar .getOwnPropertyDescriptor(objeto,'propriedade')*/
let pessoa={
    nome: 'Wagner',
}

console.log(Object.getOwnPropertyDescriptor(pessoa,['nome']))
console.log(Object.getOwnPropertyDescriptor(window,['scrollX']))