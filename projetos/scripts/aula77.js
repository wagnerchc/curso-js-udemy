/*Function*/
function testeFuncao(a){
    return a;
}
console.log(testeFuncao('oi'))
//Não é aconselhável fazer função com new
teste2=new Function(
    'a',
    'return arguments'
)
console.log(teste2('testando'))