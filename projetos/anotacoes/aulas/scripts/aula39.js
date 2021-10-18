let novaPessoaBonita={
    nomeDaPessoa:'Wagner',
    getNomeDaPessoa(){
        console.log("Esse é o nome do objeto pai "+this.nomeDaPessoa)
    }
}

console.log(Object.getOwnPropertyDescriptor(novaPessoaBonita,'nomeDaPessoa'))

let novaPessoaBonita2={
    idade: 99,
    nomeDaPessoa:'Teste'
}

Object.assign(novaPessoaBonita2,novaPessoaBonita)

console.log(novaPessoaBonita2)

novaPessoaBonita2.getNomeDaPessoa()

novaPessoaBonita2.nomeDaPessoa='Aline'

console.log(novaPessoaBonita2.nomeDaPessoa)

novaPessoaBonita2.nomeDaPessoa='Wagner'

console.log(novaPessoaBonita2.nomeDaPessoa===novaPessoaBonita.nomeDaPessoa) // esse compara um atributo/comportamento do objeto, por isso podem ser idênticos

console.log(novaPessoaBonita2===novaPessoaBonita) //esse compara o objeto como um todo, por isso é falso