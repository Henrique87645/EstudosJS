let num = [5, 8, 3, 2, 9]
num.push(1) //acrescenta um número dentro do vetor 
num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`As posições do array em ordem crescente são ${num}`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 
let pos = num.lastIndexOf(7)
if(pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor escolhido está na posição ${pos}`)
}
//quando printar vslor -1 significa que o valor ñ existe no vetor 