const readline = require("readline-sync")
let num = readline.question("Ate onde sera feito a contagem?: ")
let numeroanterior = 0
let numeroatual = 1
let numprox = 0
for ( let i = 0; i < num; i++)
{
numeroanterior = numeroatual + numprox

numeroatual = numprox

numprox = numeroanterior        

console.log(numprox)
}

// let num1 = readline.question("Ate onde sera feito a contagem?: ")
// let numeroanterior = 0
// let numeroatual = 1
// let numprox = 0
// for ( let i = 0; i < num1; i++)
// {
// numprox = numeroatual + numeroanterior

// numeroanterior = numeroatual

// numeroatual = numprox
// console.log(numeroatual)
// }
