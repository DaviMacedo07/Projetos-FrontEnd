let nomeVendedor = lines.shift("Qual o nome do vendedor?")
let salaryFix = Number(lines.shift("Qual o salário fixo do vendedor"))
let totalVendas = Number(lines.shift("Qual o total de vendas do mês"))

let vedendorFMes = totalVendas * 0.15

console.log( "TOTAL = R$ " + (vedendorFMes+salaryFix).toFixed(2))