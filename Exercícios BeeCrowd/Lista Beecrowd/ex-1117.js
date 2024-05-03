
var prompt = function(texto) { return lines.shift(); };

let av1, av2
let contador = 0

    while (true) {
        let nota = Number(prompt("Digite uma nota: "))

        if (nota >= 0 && nota <=10) {
            if (contador === 0) {
                av1 = nota
                contador++ 
            } else {
                av2 = nota 
                break
            }

        } else {
            console.log("nota invalida")
        }
    }

    let media = ((av1 + av2) /2)
    console.log(`media = ${media.toFixed(2)}`)
