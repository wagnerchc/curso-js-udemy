let exercicio01={
    nome:'Exercício com três propriedades',
    numero: 3,
    teste(){
        if(this.numero==2){
            return true
        } else {
            return false
        }
    },
    arr: [1,2,3]
}

function resultado(){
    let res=document.getElementById('res')   
    res.innerHTML =``
    res.innerHTML += `<p>Valor guardado como ${typeof exercicio01.nome} foi: <strong>${exercicio01.nome}<strong></p>`
    res.innerHTML+= `<p>Valor guardado como ${typeof exercicio01.numero} foi: <strong>${exercicio01.numero}<strong></p>`
    res.innerHTML+= `<p>Valor guardado como ${typeof exercicio01.teste()}: <strong>${exercicio01.teste()}<strong></p>`
    if(exercicio01.arr.length!=0){
        res.innerHTML+= `Imprimindo o array: `
            for(i=0;i<exercicio01.arr.length;i++){
                res.innerHTML+=`${exercicio01.arr[i]} `
            }
        res.innerHTML+=`Fim do array!`
    } else {
        res.innerHTML+=`<p>O array está vazio.</p>`
    }
}