
let n = Number(lines.shift()) 
for ( let i = 0; i < n; i++) {
    const [x, y] = lines[i].split(' ').map(Number);

    if(y === 0){
        console.log("divisao impossivel")
    } else {
        console.log((x/y).toFixed(1))
    }
}