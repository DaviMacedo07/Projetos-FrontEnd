let x = Number(lines.shift())
let y = Number(lines.shift())

let inicio
let fim 

if (x < y) {
    inicio = x
    fim = y
} else {
    inicio = y
    fim = x
}

for (let i = inicio ; i < fim; i++) {
    if (i % 5 === 2 || i % 5 === 3) {
        resultado++
        console.log(resultado)
    }
}