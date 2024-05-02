let i = Number(lines.shift())
let t = Number(lines.shift())
let h
if (i == t) {
  h = 24
} else if ( i <= t) {
    h = t - i
} else {
    h = (24-i) + t
}

console.log("O jogo durou " + i + t + h)