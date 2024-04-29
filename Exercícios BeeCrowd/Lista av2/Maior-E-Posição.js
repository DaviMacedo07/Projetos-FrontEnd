maior = -99999999

for( let i = 0; i <= 100; i++) {
    n = Number(lines.shift())
    if (n > maior) {
        maior = n
        pos = i
    }
}

console.log(maior)
console.log(pos + 1)