// Array.SOME = Verifica se pelo menos UM  é 
// Array.EVERY = Verifica se todos são
// Nesses dois , recebem como paramentro "el" = elemento
// Array.FILTER , irá filtrar o array, pórém não modifica o array original
const arr = [1, 5, 10]

let onlyNumbers = arr.every( function(el) {
    return typeof el === "number" && el < 20
})


const yup = arr.filter(function(el, i , _arr){
    return typeof el === "number"
})
// Array.MAP ira fazer uma verificação para cada elemento , nesse caso , eu mandei retornarl elemento * elemento
let yup2 = arr.map(function(el, i, _arr) {
    return el * el +1
})





console.log(onlyNumbers)
console.log(arr)
console.log(yup)
console.log(yup2)
