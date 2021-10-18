function ninjaNovo(nome,arma){
    this.nome=nome;
    this.arma=arma;
}

const naruto=new ninjaNovo('Naruto','shuriken')
const rocklee=new ninjaNovo('Rock Lee','punhos')
const cloneDoNaruto=new ninjaNovo('Naruto','shuriken')
const cloneVerdadeiroDoNaturo = naruto

console.log(naruto===rocklee)
console.log(naruto===cloneDoNaruto)
console.log(naruto===cloneVerdadeiroDoNaturo)
console.log(naruto.nome===cloneDoNaruto.nome)