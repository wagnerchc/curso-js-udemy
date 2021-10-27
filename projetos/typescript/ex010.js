var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "O nome deste humano \u00E9 " + this.nome + " e ele tem " + this.idade + ".";
    };
    return Humano;
}());
var wagner = new Humano('Wagner', 36);
console.log(wagner);
console.log(wagner.apresentarHumano());
