while (true) {
    const [ x, y ] = lines.shift().split(' ').map(Number)

    if ( x == y) {
        break;
    } else if ( x < y) {
        console.log("Crescente")
    } else {
        console.log("Decrescente")
    }
}