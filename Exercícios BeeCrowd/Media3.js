let n1 = Number(lines.shift("Digite a primeira nota "))
let n2 = Number(lines.shift("Digite a segunda nota "))
let n3 = Number(lines.shift("Digite a terceira nota "))
let n4 = Number(lines.shift("Digite a quarta nota "))

n1 = n1 * 2
n2 = n2 * 3
n3 = n3 * 4 
n4 = n4 * 1

let resultado = ((n1 + n2 + n3 + n4) / 10)

if (resultado >= 7) {
    console.log(`Media: ${(resultado).toFixed(1)}`)
    console.log(`Aluno aprovado`)
} else if (resultado >= 5.0 && resultado <= 6.9){
    console.log("Media:" + resultado.toFixed(1))
    console.log("Aluno em exame")
    let notaExame = Number(lines.shift("digite a nota do exame"))
    console.log("Nota do exame: " + notaExame)
    let mediaFinal = ((notaExame + resultado) / 2)
    if ((mediaFinal) > 5.0) {
        console.log(`Aluno aprovado`) 
        console.log(`Media final: ${mediaFinal}`)
    } else {
        console.log("Aluno reprovado")
    }
} else {
    console.log(`Media: ${(resultado).toFixed(1)}`)
    console.log(`Aluno reprovado`)
}