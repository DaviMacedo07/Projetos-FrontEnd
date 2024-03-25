
if (A < B + C && B < A + C && C < A + B) {
    console.log("Perímetro = " + ((A + B + C).toFixed(1)))
} else {
    alturaTrapezio = (((A+B)*C)/ 2).toFixed(1)
    console.log("Area = " + alturaTrapezio)
}