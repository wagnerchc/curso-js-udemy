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
