const readline = require('readline-sync');

let tentativas = 0;
const senhaCorreta = "123";
let saldo = 0; // Saldo inicial

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
            opcao = readline.questionInt("Escolha uma opcao: ");
            
            if (opcao < 1 || opcao > 4) {
                console.log("Opcao incorreta");
                break;
            } if (opcao === 1)  {
                const saque = parseFloat(readline.question("Digite o valor que deseja sacar R$ "));
                if (saque <= 0 || saque > saldo) {
                    console.log("Valor inválido")
                } else {
                    saldo -= saque
                    console.log(`Saque de R$ ${saque} realizado. Novo saldo bancario R$ ${saldo}`)
                }

            } else if (opcao === 2) {
                const deposito = parseFloat(readline.question("Digite o valor que deseja depositar R$ "));
                if (deposito <= 0) {
                    console.log("Valor inválido");
                } else {
                    saldo += deposito;
                    console.log(`Depósito de R$ ${deposito} realizado. Novo saldo bancario R$${saldo}`);
                }

            } else if (opcao === 3) {
                const valorEmprestimo = parseFloat(readline.question("Digite o valor do emprestimo R$ "));
                const parcelas = parseInt(readline.question("Digite a quantidade de parcelas: "));
                const valorParcela = valorEmprestimo / parcelas;

                if (valorEmprestimo <= saldo / 3) {
                    saldo += valorEmprestimo;
                    console.log(`Emprestimo aprovado, novo saldo de R$ ${saldo}. Novas parcelas de R$ ${valorParcela}`);
                } else {
                    console.log("Emprestimo reprovado");
                }

            } else if (opcao === 4) {
                console.log("Encerrando o programa");
                break;
            }
        }
        break;
    } else {
        console.log("Senha incorreta. Tente novamente.");
        tentativas++;
        if(tentativas == 3)
            break
    }
}