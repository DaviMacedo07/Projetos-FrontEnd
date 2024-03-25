var valores = [];
for (var i = 0; i < 3; i++) {
    valores.push(parseInt(prompt("Digite o valor " + (i+1) + ":")));
}


var valOrd = valores.slice().sort((a, b) => a - b);


console.log(valOrd.join("\n"));

console.log();

console.log(valores.join("\n"));