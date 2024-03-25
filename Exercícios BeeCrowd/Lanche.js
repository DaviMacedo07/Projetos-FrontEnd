var [codItem, qtdItem] = lines.shift().split(' ').map(Number);
var result 
if (codItem === 1) {
   result = 4.00 * qtdItem 
    console.log(`Total: R$ ${(result).toFixed(2)}`)
} else if (codItem === 2) {
    result = 4.50 * qtdItem 
     console.log(`Total: R$ ${(result).toFixed(2)}`)
 } else if (codItem === 3) {
    result = 5.00 * qtdItem 
     console.log(`Total: R$ ${(result).toFixed(2)}`)
 } else if (codItem === 4) {
    result = 2.00 * qtdItem 
     console.log(`Total: R$ ${(result).toFixed(2)}`)
 } else if (codItem === 5) {
    result = 1.50 * qtdItem 
     console.log(`Total: R$ ${(result).toFixed(2)}`)
 }

