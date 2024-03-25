let valorQualquer = Number(lines.shift("Digite um valor qualquer"))

if (valorQualquer >= 0 && valorQualquer <= 25) {
    console.log(" Intervalo [0,25]")
} else if ( valorQualquer > 25 && valorQualquer <= 50 ) {
    console.log("Intervalo (25,50]")
} else if (valorQualquer > 50 && valorQualquer <= 75) {
    console.log("Intervalo (50,75]")
} else if (valorQualquer > 75 && valorQualquer <= 100) {
    console.log("Intervalo (75,100]")
} else{
    console.log("Fora de intervalo")
} 