// arr.push vai modificar o array original e vai "empurrar" o que vc colocar
let arr = [1,2,3]


let teste = arr.push("pica")
console.log(teste)
console.log(arr)

//arr.pop vai pegar o ultimo elemento e estourar do array orginal
//arr.shift vai fazer a mesma coisa , so que  com o primeiro elemento 

//arr.unshift vai botar no inicio do array
let ultimoItem = arr.pop()
console.log(ultimoItem)
console.log(arr)

//arr.splice modifica o array original ,e  apartir de um indice deleta uma quantidade x do array