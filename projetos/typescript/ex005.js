var Barco;
(function (Barco) {
    Barco[Barco["Motor"] = 2] = "Motor";
    Barco[Barco["Proa"] = 1] = "Proa";
    Barco[Barco["Popa"] = 1] = "Popa";
})(Barco || (Barco = {}));
;
var numeroDeMotores = Barco.Motor;
//Barco.Motor=3; Não é possível alterar o valor, somente ler
console.log(numeroDeMotores);