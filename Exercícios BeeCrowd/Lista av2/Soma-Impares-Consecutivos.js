const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

let x = parseInt(lines.shift());
let y = parseInt(lines.shift());

let sum = 0;

if (x > y) {
    let temp = x;
    x = y;
    y = temp;
}

for (let i = x + 1; i < y; i++) {
    if (i % 2 !== 0) {
        sum += i;
    }
}

console.log(sum);
