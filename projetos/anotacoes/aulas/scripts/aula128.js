//128 - Copiando apenas o prototype - ganha mais performance
function Animal(){}
Animal.prototype.som=true
Animal.prototype.vivo=true
Animal.prototype.acordado=false

function Rato(){}
Rato.prototype.rabo=true

Rato.prototype=Animal.prototype

let ratao = new Rato()

console.log('Funciona para som, vivo, acordado => '+ratao.som)
console.log('Não funcionou para rabo => '+ratao.rabo)