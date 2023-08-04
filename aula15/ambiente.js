let num = [5, 8, 2, 9, 3]
num.push(1)                     //adiciona o número '1'
num.sort()                      //depois deixa o vetor em ordem crescente
console.log(num)
console.log(`O vetor tem ${num.length} posições (elementos)`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(8)        //busca qual posição (índice) o número '8' está
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}