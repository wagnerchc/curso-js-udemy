function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira', true)
console.log(laranjeira)
console.log(laranjeira.constructor)

function heroi(nome, classe){
    this.nome=nome;
    this.classe=classe;
}

let jaspion=new heroi('Jaspion','robo')
console.log(jaspion)
console.log(jaspion.constructor)

let obj={
    teste:'teste'
}

console.log(obj.constructor)
