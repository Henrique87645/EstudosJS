const entrada = require("readline-sync")
let num =entrada.question("Digite ate onde vai a seguencia: ")
let numeroanterior = 0
let numeroatual = 1
let numprox = 0
for ( let i = 0; i < num; i++) {
    numeroanterior = numeroatual + numprox
    numeroatual = numprox
    numprox = numeroanterior
    console.log(numprox)
}
