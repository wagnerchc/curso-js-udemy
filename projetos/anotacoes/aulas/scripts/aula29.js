/*Function que retorna objeto
- Semelhante ao constructor, mas sem necessidade de utilizar new, porque a função utiliza return*/
function criarCarro(modelo, portas, aro, tetoSolar) {
    return{
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro (){
            console.log("ligou")
        },
        temTetoSolar(){
            if(this.tetoSolar==true){
                console.log("Tem teto solar")
            } else {
                console.log("Não tem teto solar")
            }
        }
    }
}

let ferrari = criarCarro('Ferrari',4,18,true)

console.log(ferrari.modeloDoCarro)

ferrari.ligarCarro()
ferrari.temTetoSolar()

let bmw = criarCarro('BMW',2,16,false)

console.log(bmw.modeloDoCarro)