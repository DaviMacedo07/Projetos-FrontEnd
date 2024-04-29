//let numGInter = 0;
//let numGGremio = 0;
//let qtsGrenais = 0;
let numVitInter = 0;
let numVitGremio = 0;
let numEmpates= 0;
let totalPartidas = 0;
let contador = 1

while ( contador == 1 ) {
    const [numGInter, numGGremio] = lines.shift().split(' ').map(Number);

    if(numGInter > numGGremio) {
        numVitInter++
    } else if ( numGGremio > numGInter) {
        numVitGremio++
    } else {
        numEmpates++
    }

    totalPartidas++

    console.log("Novo grenal (1-sim 2-nao)")
    contador = Number(lines.shift(""))

    while(contador != 1 && contador != 2) {
        console.log("Novo grenal (1-sim 2-nao)")
        contador = Number(lines.shift())
    }
}

console.log(`${totalPartidas} grenais`)
console.log(`Inter:${numVitInter}`)
console.log(`Gremio:${numVitGremio}`)
console.log(`Empates:${numEmpates}`)

if (numVitInter > numVitGremio) {
    console.log("Inter venceu mais")
} else if (numVitGremio > numVitInter) {
    console.log("Gremio venceu mais") 
} else {
    console.log("Nao houve vencedor")
}