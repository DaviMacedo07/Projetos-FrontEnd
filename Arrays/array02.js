//ARR.IndexOf vai procurar qual é o indice do numero pesquisado
//ARR.lastIndexOf vai procurar qual o ultimo indice achado de tal numero
//ARR.FIND vai procurar o primeiro elemento que satisfaça a condição
//ARR.FindIndex vai procu rar o primeiro elemento que satisfaça a condição e retornar o índice do mesmo

let arr = [4, 5, 6, 10, 20, 35, 4, 5]

console.log(arr.lastIndexOf(4))
console.log(arr.find(function(el){
    return el > 21 
}))