var prompt = function(texto) { return lines.shift(); };


while (true) {
    let pergunta = prompt("Digite as coordenadas x e y, respectivamentes") 
    let [x , y] = pergunta.split(' ').map(Number)

    if ( x === 0 || y === 0) {     
        break
    }

    if (x > 0 && y > 0) {
        console.log("primeiro")
    } else if ( x > 0 && y < 0) {
        console.log("quarto")
    } else if (x < 0 && y < 0) {
        console.log("terceiro")
    } else if ( x < 0 && y > 0) {
        console.log("segundo")
    }

   
}
