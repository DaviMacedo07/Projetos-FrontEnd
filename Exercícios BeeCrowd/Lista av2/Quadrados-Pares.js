let num = Number(lines.shift())

for (let i = 2; i <= num; i += 2) {
    console.log(`${i}^2 = ${i * i}`)
}