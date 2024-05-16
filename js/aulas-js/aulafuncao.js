const readlineSync = require('readline-sync');
let imparpar = readlineSync.question("Digite um numero e descubra se e par ou impar: ")
function parimpar(b) {
    if (b%2==0){
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimpar(imparpar))

console.log('--------------------------------------------------------------------')

let som1 = parseFloat(readlineSync.question('Digite um numero: '));
let som2 = parseFloat(readlineSync.question('Digite outro numero: '));
function soma(n1=0 , n2=0) {
    return n1 + n2
}
console.log(soma(som1, som2))

console.log('--------------------------------------------------------------------')

let mult1 = parseFloat(readlineSync.question('Digite um numero: '));
let mult2 = parseFloat(readlineSync.question('Digite o numero que desaja mutiplicar: '));
let v = function(x) {
    return x*mult2
}
console.log(v(mult1))

console.log('--------------------------------------------------------------------')

let fator = parseFloat(readlineSync.question('Qual o numero que deseja descobrir o fatorial?: '))
function fatorial(a) {
    let fat = 1 
    for(let c = a; c > 1; c--){
        fat *= c
    }
    return fat 
}
console.log(fatorial(fator))

console.log('--------------------------------------------------------------------')

//RECURSIVIDADE
let fatori = parseFloat(readlineSync.question('Qual o numero que deseja descobrir o fatorial?: '))
function Fatorial(m){
    if(m==1) {
        return 1
    } else {
        return m*Fatorial(m-1)
    }
}
console.log(Fatorial(fatori))

console.log('--------------------------------------------------------------------')