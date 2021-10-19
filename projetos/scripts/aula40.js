/*Comparando objetos
- Usar .is(obj1,obj2) para comparar dois objetos, para ter o mesmo resultado do que usar
- Porém há duas comparações que não funcionam:
--NaN com NaN
--+0 com -0
Clique aqui, para saber mais sobre o método <i>Object.is(value1,value2) - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/is*/
let obj1={
    a:1
}
let obj2={
    a:1
}
console.log(Object.is(obj1,obj2))//falso
console.log(Object.is(NaN,NaN))//verdadeiro
console.log(NaN===NaN)//falso
console.log(Object.is(+0,-0))//falso
console.log(+0===-0)//verdadeiro

let testeObj3 = obj2

console.log(Object.is(testeObj3,obj2))//verdadeiro
console.log(testeObj3===obj2)//verdadeiro
