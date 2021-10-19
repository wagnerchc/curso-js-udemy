/*130 - Construtor temporário
Quando precisar alterar propriedades e métodos num filho sem alterar o pai, mas pode prejudicar a performance*/

function ccc (){
    this.mensagem=function(){
        console.log("Mensagem da função ccc")
    }
}
function ddd (){}
ddd.prototype=ccc.prototype
let F = function(){}
F.prototype=ccc.prototype
ddd.prototype=new F()
ddd.prototype.mensagem=function(){
    console.log("Mensagem da função ddd")
}
let mensagemCCC = new ccc()
let mensagemDDD = new ddd()
let mensagemDDD2 = new ddd()
mensagemCCC.mensagem()
mensagemDDD.mensagem()
mensagemDDD2.mensagem()
ddd.prototype.mensagem=function(){
    console.log("Nova mensagem de ddd")
}
mensagemCCC.mensagem()
mensagemDDD.mensagem()//não imprimiu a mensagem nova do 'ccc'