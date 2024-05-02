
let alcool = 0;
let gasolina = 0;
let diesel = 0;

while (true) {
    let preferencia = parseInt(lines.shift());

    if (preferencia === 1) {
        alcool++;
    } else if (preferencia === 2) {
        gasolina++;
    } else if (preferencia === 3) {
        diesel++;
    } else if (preferencia === 4) {
        break; 
    } else {
    }
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
