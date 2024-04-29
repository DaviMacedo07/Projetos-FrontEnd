let segundos = parseInt(lines.shift("Qual o tempo de duração"))

let horas = parseInt(segundos/ 3600)

segundos %= 3600
let minutos = parseInt(segundos / 60)
segundos %= 60

console.log(horas + ":" + minutos + ":" + segundos)

