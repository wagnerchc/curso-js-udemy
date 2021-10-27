function descreverCarro(marca, aro) {
    if (aro) {
        console.log("O carro \u00E9 da marca " + marca + " e tem um aro " + aro + ".");
    }
    else {
        console.log("O carro \u00E9 da marca " + marca + ".");
    }
}
descreverCarro("BMW", 20);
descreverCarro("VW");
