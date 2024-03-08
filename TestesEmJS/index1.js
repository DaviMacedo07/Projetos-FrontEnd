let produtos = ["Maçã", "Pitaya", "Laranja", "Uva"]
let carros = ["volvo", "nissan", "COrsa"]
let ex = ["carro", "1", "2", "3" ,"4", "5", "6"]
let produtos2 = produtos.slice(2, 3  )

produtos.unshift("Lambo" , "Ferrari")
produtos.push("Melao" , "Papaya")
produtos.pop()
produtos.shift()
let ex2 = ex.slice(0,2)
let teste = [...produtos, ...carros, ex]



//console.log(produtos)
//console.log(produtos2)
//console.log(ex)
//console.log(ex2)
console.log(teste.length)
