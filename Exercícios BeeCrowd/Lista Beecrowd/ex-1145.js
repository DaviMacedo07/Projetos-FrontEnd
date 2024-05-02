
const [X, Y] = input.split(' ').map(Number)

for ( let i = 1; i <= Y; i+= X) {
    const array = []
    for (let j = 0; j < X; j++) {
        const num = j + i

        if (num <= Y) {
            array.push(num)
        }
    }

    console.log(array.join(" "))
}