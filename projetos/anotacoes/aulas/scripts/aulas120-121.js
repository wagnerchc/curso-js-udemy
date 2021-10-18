//120 - Fazendo upgrade nos prototypes, adicionando métodos

Array.prototype.checkLength = function(){
    return this.length;
}

Array.prototype.somaDoisPrimeiros=function(){
    return this[0]+this[1];
}

let arrayA=[1,2,3,4,5,6,7,8,9,10]
let arrayB=[11,12,13,14,15,16,17,18,19,20,21]

console.log(arrayA.checkLength())
console.log(arrayB.checkLength())
console.log(arrayA.somaDoisPrimeiros())
console.log(arrayB.somaDoisPrimeiros())

//121 - Porque não é uma excelente ideia usar funções dentro do prototype

if(typeof Array.prototype.somaTodosValores !== 'function'){
    Array.prototype.somaTodosValores=function(){
        let resultado=0
        for(let i=0;i<this.length;i++){
            resultado+=this[i]
        }
        return resultado
    }    
}
console.log(arrayA.somaTodosValores())
console.log(arrayB.somaTodosValores())