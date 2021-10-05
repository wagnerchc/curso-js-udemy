let carro = {
    portas: 4,
    cor: "Vermelha",
    opcionais: ["teto solar","blindagem","ar condicionado"
    ],
    requisito: true
}

console.log(carro)
console.log(typeof carro)

let pessoa = {
    nome: "Matheus"
}
console.log(pessoa)
console.log(typeof pessoa)

console.log(carro.portas)
console.log(carro['portas'])
console.log(carro.cor)
console.log(carro['cor'])

let nomePessoa = pessoa['nome']
console.log(nomePessoa.length)

let maquina = {
    material: "Aço inox",
    equipamentos: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numeroDeMotores: 1
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamentos[2])

for(let i = 0;i<maquina.equipamentos.length;i++){
    console.log(maquina.equipamentos[i])
}

if(maquina.vaiMontada==false){
    console.log("O comprador precisa montar a máquina")
}