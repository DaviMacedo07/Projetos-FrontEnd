let x = Number(lines.shift())
let y = Number(lines.shift())

let inicio, fim 

if (y < x) {
    inicio = y
    fim = x
} else {
    inicio = x
    fim = y
}
let soma = 0

for (let i = inicio; i <= fim; i++) {
    // Soma dos numeros que nao sao multiplos de 13 entre 100 e 200

    if ( i %  13 !== 0) {
        soma = soma + i

    }

}

console.log(soma) 