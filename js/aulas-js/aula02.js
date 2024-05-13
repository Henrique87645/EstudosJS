const readlineSync = require('readline-sync');

let total = 0;

console.log("Bem-vindo ao sistema de caixa do mercado.");

while (true) {
    console.log("opcao:");
    console.log("1) Passar compra");
    console.log("2) Sair");

    let opcao = readlineSync.question("Escolha uma opcao: ");

    if (opcao === '2') {
        console.log('Encerrando o programa.');
        break;
    } else if (opcao === '1') {
        while (true) {
            let nome = readlineSync.question('Coloque o nome do produto: ');
            let preco = parseFloat(readlineSync.question('Insira o preco do produto R$: '));
            let quantidade = parseInt(readlineSync.question('Quantos produtos voce deseja?: '));
            total += preco * quantidade;

            let resposta = readlineSync.question('Deseja inserir outro produto? (S/N): ');
            if (resposta.toLowerCase() === 'n') {
                let aplicarDesconto = readlineSync.question('Deseja finalizar a compra com desconto? (S/N): ');
                if (aplicarDesconto.toLowerCase() == 's') {
                    let desconto = parseFloat(readlineSync.question('Insira o valor do desconto R$: '));
                    total -= desconto;
                    } 
                console.log('Valor total da compra R$:', total.toFixed(2));
                break; // Encerra o loop 
            }
        }
        break; // Encerra o programa após o usuário finalizar a compra
    } else {
        console.log('Opcao incorreta. Encerrando o programa.');
        break;
    }
}
