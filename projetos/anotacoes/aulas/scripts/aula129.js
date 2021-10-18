//129 - Mudança em cadeira do conteúdo das props e métodos

function aaa (){
    this.mensagem=function(){
        console.log("Mensagem da função aaa")
    }
}
function bbb (){}
bbb.prototype=aaa.prototype
bbb.prototype.mensagem=function(){
    console.log("Mensagem da função bbb")
}
let mensagemAAA = new aaa()
let mensagemBBB = new bbb()
let mensagemBBB2= new bbb()
mensagemAAA.mensagem()
mensagemBBB.mensagem()
mensagemBBB2.mensagem()
bbb.prototype.mensagem=function(){
    console.log("Nova mensagem de bbb")
}
mensagemAAA.mensagem()
mensagemBBB.mensagem()