let pessoa={
    nome:'Wagner',
    exibirNome(){
        res.innerHTML +=`<p>Valor guardado como ${typeof pessoa.nome} foi: <strong>${pessoa.nome}<strong></p>`
    }
}

function resultado(){
    let res=document.getElementById('res')
    res.innerHTML =``
    pessoa.exibirNome()
}