let dist = parseInt(lines.shift("Qual a distância em KM percorrida"))
let combustivel = Number(lines.shift("Qual a quantidade de combustível utilizada"))

let consumoMedio = (dist/combustivel).toFixed(3)

console.log(`${consumoMedio} km/l`)