const entrada = require("readline-sync")

let tentativas = 0;
const senhaCorreta = "123";
let saldo = 0; 

while (tentativas < 3) {
    let senha = entrada.question("Digite a senha: ");
    if (senha === senhaCorreta) {
        console.log("Bem Vindo!");
        let opcion;
        while (true) {
            console.log("1. Saque");
            console.log("2. Deposito");
            console.log("3. Emprestimo");
            console.log("4. Sair");
            opcion = entrada.questionInt("Escolha uma opcao: ");

            if (opcion < 1 || opcion > 4) {
                console.log ("essa opcao nao existe");
            } if (opcion === 1) { 
                    let saque = parseFloat(entrada.question("quanto voce deseja sacar?: R$  "))
                if (saque > saldo || saque <= 0 ) {
                    console.log("saque invalido")   
                } else {
                    let total = (saldo - saque)
                    console.log ( "transiçao aprovada vc tem " + total + " reais em sua conta")
                }
            }
            else if ( opcion === 2) {
                    let Deposito = parseFloat(entrada.question("quanto vc deseja Depositar?: R$ "))
                if (Deposito <= 0 ) {
                    console.log("Deposito invalido")
                } else {
                    saldo += Deposito 
                    console.log("Deposito aprovado, voce tem " + Deposito + " reais em sua conta")
                }
            } 
            else if ( opcion === 3 ) {
                    let valoremp = parseFloat(entrada.question("qual valor pretendido do emprestimo: "))
                    let vezes = parseFloat(entrada.question("quantas vezes vc deseja pagar: "))
                    let valorparc = parseFloat(entrada.question("qual o valor das parcelas: "))

                if ( valoremp <= saldo / 3) { 
                    let tot3 = (saldo + valoremp)
                    console.log("Emprestim aprovado, o novo saldo é de " + tot3 + ". Suas parcelas ficaram de R$: " + valorparc + " em " + vezes + " sem juros.")
                } else {  
                    console.log("Emprestimo negado!")
                }
            }else if (opcion === 4) {
                console.log("usuario saiu da conta!")
            break;
            }
        } 
         break;
    } else {
        console.log("Numero de tentativas exedida! Encerrando o sistema");
        tentativas++;
        if (tentativas == 3 )
        break;
    }

}