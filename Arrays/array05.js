//arr.reverse , inverte o array e modifica o array original


let arr = [1,2,3,4,5]

let reduce = arr.reduce(function(acumulador, atual, i , _arr){
    console.log(acumulador)
    console.log(atual)
    console.log(arr)
    return acumulador + atual
})