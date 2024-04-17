const readline = require('readline-sync');

let tentativas = 0;
const senhaCorreta = "123";
let saldo = 1000; // Saldo inicial

while (tentativas < 3) {
    const senha = readline.question("Digite a senha: ");
    if (senha === senhaCorreta) {
        console.log("Bem-vindo!");
        let opcao;
        while (true) {
            console.log("1. Saque");
            console.log("2. Depósito");
            console.log("3. Empréstimo");
            console.log("4. Sair");
            opcao = readline.questionInt("Escolha uma opção: ");
            
            if (opcao === 1 || opcao === 2 || opcao === 3 || opcao === 4) {
                break;
            } else {
                console.log("Opção incorreta");
            }
        }
        
        if (opcao === 1) {
            const saque = parseFloat(readline.question("Digite o valor que deseja sacar: "));
            if (saque <= 0 || saque > saldo) {
                console.log("Valor inválido");
            } else {
                saldo -= saque;
                console.log(`Saque de ${saque} realizado. Novo saldo: ${saldo}`);
            }
        } else if (opcao === 2) {
            const deposito = parseFloat(readline.question("Digite o valor que deseja depositar: "));
            if (deposito <= 0) {
                console.log("Valor inválido");
            } else {
                saldo += deposito;
                console.log(`Depósito de ${deposito} realizado. Novo saldo: ${saldo}`);
            }
        } else if (opcao === 3) {
            const valorEmprestimo = parseFloat(readline.question("Digite o valor do empréstimo: "));
            const parcelas = parseInt(readline.question("Digite a quantidade de parcelas: "));
            const valorParcela = parseFloat(readline.question("Digite o valor das parcelas: "));
            if (valorEmprestimo <= saldo / 3) {
                saldo += valorEmprestimo;
                console.log("Empréstimo aprovado. Novo saldo: " + saldo);
            } else {
                console.log("Empréstimo reprovado");
            }
        } else if (opcao === 4) {
            console.log("Encerrando o programa");
            break;
        }
    } else {
        console.log("Senha incorreta. Tente novamente.");
        tentativas++;
    }
}

if (tentativas === 3) {
    console.log("Número de tentativas excedida! Encerrando o sistema");
}
