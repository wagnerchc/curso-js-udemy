//84 - String
//.length - número de caracteres
//.length[] - acessar os caracteres como se fosse um array

let s1 = new String('teste')
let s2 = 'TESTANDO'

console.log(s1.length)
console.log(s2.length)

console.log(s1[2])
console.log(s2[6])

//85 - String (continuação)
//.toUpperCase()
//.toLowerCase()
//.charAt()
//.indezOf()

console.log(s1.toUpperCase())
console.log(s2.toLowerCase())
console.log(s2.charAt(5))
console.log(s2[5])
console.log(s2.indexOf('D')) //case sensitive

//86 - String (continuação)
//.slice(i,f) - exclui caracteres de início e fim
//.substring(i,f) - retorna o que foi indicado no início e fim
//.split("") - explode a string em array

let frase = "Mussum Ipsum, cacilds vidis litro abertis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Manduma pindureta quium dia nois paga. Casamentiss faiz malandris se pirulitá. Quem num gosta di mim que vai caçá sua turmis!"

console.log(frase.slice(2,6))
console.log(frase.split(" "))
console.log(frase.substring(2,6))