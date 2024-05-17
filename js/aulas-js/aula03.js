const readlineSync = require('readline-sync');
let numeroUsuario = parseInt(readlineSync.question('Digite um numero inteiro positivo: '));

if(numeroUsuario > 0) {
    let soma = 0;

    for(let numero = 2; numero <= numeroUsuario; numero++) {
        let primo = true;
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {
                primo = false;
                break;
            }
        }
        if(primo) {
            soma += numero;
        }
    }
    console.log(`A soma de todos os números primos entre 1 e ${numeroUsuario} é: ${soma}`);
};
