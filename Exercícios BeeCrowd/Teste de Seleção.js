var [A,B,C,D] = lines.shift().split(' ').map(Number);
if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && A % 2 === 0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}