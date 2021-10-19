/*92 - Error - tratar erros, por que é um objeto*/
try {
    throw new Error("Deu um problema no código")
} catch(e) {
    console.log(`${e.name}: ${e.message}`)
}