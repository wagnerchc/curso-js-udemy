/*Destructuring e rest operator
- A sintaxe de rest parameter (parâmetros rest)  nos permite representar um número indefinido de argumentos como um array.
- Clique aqui, para saber mais sobre Rest - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/rest_parameters*/
let arr=['banana','laranja','maça',54,86,49,37,55,01,0001,18530]
console.log(arr)
let [primeiro,segundo,...outras]=arr
console.log(primeiro)
console.log(segundo)
console.log(outras)