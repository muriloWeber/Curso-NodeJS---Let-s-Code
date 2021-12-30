/*
Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. 
Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, 
e a máquina informe quanto será o valor arrecadado.
*/

const prompt = require("prompt-sync")({ sigint: true });

let end = false;
let totalP = 0;
let totalM = 0;
let totalG = 0;

do {
    let userChoice = parseInt(prompt(`Digite a opção de tamanho e em seguida a quantidade desejada:\n1 - P\n2 - M\n3 - G\n4 - Total Pedido\n5 - Sair\n`));

    if(userChoice === 5) end = true;
    else if(userChoice === 1) {
        let qtdeP = parseInt(prompt(`Quantidade desejada de camisetas P: `));
        totalP += qtdeP;
    } else if(userChoice === 2) {
        let qtdeM = parseInt(prompt(`Quantidade desejada de camisetas M: `));
        totalM += qtdeM;
    } else if(userChoice === 3) {
        let qtdeG = parseInt(prompt(`Quantidade desejada de camisetas G: `));
        totalG += qtdeG;
    } else if (userChoice === 4) {
        let totalPedido = (totalP*10) + (totalM*12) + (totalG*15);
        console.log(`O total do pedido é de 5R$ ${totalPedido.toFixed(2)}.`);
    }    

} while (!end);
