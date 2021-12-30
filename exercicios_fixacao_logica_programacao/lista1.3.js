/*
A padaria Hotpão vende uma certa quantidade de pães franceses e uma quantidade de broas a cada dia. 
Cada pãozinho custa R$0,12 e a broa custa R$1,50. Ao final do dia, o dono quer saber quanto arrecadou com a venda dos pães e broas (juntos), 
e quanto deve guardar numa conta de poupança (10% do total arrecadado). Você foi contratado para fazer os cálculos para o dono. 
Com base nestes fatos, faça um algoritmo para ler as quantidades de pães e de broas, e depois calcular os dados solicitados.
*/

function padaria(numPaes, numBroas) {
    let totalPaes = numPaes * 0.12;
    let totalBroas = numBroas * 1.50;
    let totalDia = totalBroas + totalPaes;
    let poupanca = totalDia * (1-0.9);

    return console.log(`O total vendido no dia foi de R$${totalDia.toFixed(2)}. Você deve depositar a quantia de R$${poupanca.toFixed(2)} que representa 10% do total do dia.`)
}

const dia1 = padaria(1053, 101);