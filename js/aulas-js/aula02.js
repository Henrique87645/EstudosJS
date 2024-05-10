const readlineSync = require('readline-sync');

let total = 0;

console.log("Bem-vindo ao sistema de caixa do mercado.");

while (true) 
{
    console.log("Opções:");
    console.log("1) Passar compra");
    console.log("2) Sair");

    let opcao = readlineSync.question("Escolha uma opcao: ");

    if (opcao === '2') {
        console.log('Encerrando o programa.');
        break;
    } else if (opcao === '1') 
    {
        let continuar = true;
        while (continuar) 
        {
            let nome = readlineSync.question('Coloque o nome do produto: ');
            let preco = parseFloat(readlineSync.question('Insira o preco do produto: '));
            let quantidade = parseInt(readlineSync.question('Quantos produtos voce deseja?: '));

            total += preco * quantidade;

            let resposta = readlineSync.question('Deseja inserir outro produto? (S/N): ');
            if (resposta.toLowerCase() === 'N') 
            {
                continuar = false;

                resposta = readlineSync.question('Deseja finalizar a compra com desconto? (S/N): ');
                if (resposta.toLowerCase() === 'S') 
                {
                    let desconto = parseFloat(readlineSync.question('Insira o valor do desconto: '));
                    total -= desconto;
                    console.log('Valor total da compra com desconto:', total.toFixed(2));
                } 
                else
                {
                    console.log('Valor total da compra:', total.toFixed(2));
                }
            }
        }
    } else {
        console.log('Opcao incorreta. Encerrando o programa.');
    }break;
}