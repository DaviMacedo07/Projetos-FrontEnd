let automovel = 12

let tempoGasto = Number(lines.shift("Qual o tempo gasto na viagem em horas?"))

let velocMedia = Number(lines.shift("Qual foi a velocidade média na viagem"))

let qtdLitros = (tempoGasto * velocMedia) / automovel

console.log(qtdLitros.toFixed(3))
