function identity(arg) {
    console.log(typeof arg);
    return "Este \u00E9 o resultado final: " + arg.toString();
}
console.log(identity('string'));
console.log(identity(5));
console.log(identity(true));
