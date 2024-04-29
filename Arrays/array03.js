// array.toString é basicamente transformar numa string


// array.Join vai ser a mesma coisa , mas o que eu passar como parametro ira se juntar separando os elementos 


// array.concat vai concatenar os arrays , no caso eu armazenei no array3 e juntei array1 e 2
let arr1 = [ 1, 2, 3]
let arr2 = [ 5, 6, 7,]

console.log(arr1.toString())
console.log(arr1.join(" // "))
let arr3 = arr1.concat(arr2, 8, 87, 875)
console.log(arr3)