/*Propriedade do objeto</p>
- Propriedades com mais de uma palavra - não é muito utilizado, pois se prefere o camelCase
- Evitar acentuação gráfica, por estar tudo em inglês, no geral*/
let carro = {
    portas: 4,
    cor: "Vermelha"
}

console.log(carro.portas)
console.log(carro.cor)

if(carro.portas>2){
    console.log("Este carro tem mais que duas portas")
}

let pessoa = {
    nome:'Wagner'
}

console.log(pessoa['nome'])

let nomePessoa = pessoa['nome']

console.log(nomePessoa.length)