/*
Criar um programa que informe o preço total e a quantidade total de calorias de uma refeição 
a partir da escolha do cliente. O cliente deverá escolher o prato, sobremesa e bebida 
(veja a tabela a seguir): Exemplo: Usuário optou Vegetariano + Mousse diet + Chá, 
reposta do programa = R$ 12,50 e 370 Kcal. Para este programa deverá ser elaborado um menu, 
com as opções de prato, sobremesa e bebida. Neste menu, após finalizar a solicitação de cada cliente, 
deverá ser perguntado ao usuário se ele quer encerrar o programa ou se ele deseja ler as opções de um 
novo cliente.
*/

const prompt = require("prompt-sync")({ sigint: true });

const pratosPrecos = {
    '1': 5.99,
    '2': 10.99,
    '3': 15.99
};

const pratosKcal = {
    '1': 100,
    '2': 250,
    '3': 350
};

const sobremesasPrecos = {
    '1': 2.99,
    '2': 3.50,
    '3': 4.99,
};

const sobremesasKcal = {
    '1': 195,
    '2': 350,
    '3': 499
};

const bebidasPrecos = {
    '1': 2.99,
    '2': 3.50,
    '3': 4.99,
};

const bebidasKcal = {
    '1': 195,
    '2': 350,
    '3': 499
};

function lancheria () {

    let clientePrato = prompt(`Digite o código do prato que deseja pedir:
    1 - Salada Caesar
    2 - Bife a Cavalo
    3 - Filé a Parmegiana
    `);

    let clienteSobremesa = prompt(`Digite o código da sobremesa que deseja pedir:
    1 - Pudim
    2 - Salada de Frutas
    3 - Milkshake
    `);

    let clienteBebida = prompt(`Digite o código da bebida que deseja pedir:
    1 - Café Expresso
    2 - Refrigerante
    3 - Dose de Whisky
    `);

    let valorTotal = pratosPrecos[clientePrato] + sobremesasPrecos[clienteSobremesa] + bebidasPrecos[clienteBebida];
    let kcalTotal  = pratosKcal[clientePrato] + sobremesasKcal[clienteSobremesa] + bebidasKcal[clienteBebida];

    console.log(`Valor total do pedido: R$ ${valorTotal.toFixed(2)} e ${kcalTotal} Kcal.`)

};

let end = false

do{
     
    lancheria();

    const userChoice = prompt(`Digite 1 para fazer outro pedido ou 0 para sair: `);
    if(userChoice === '0') end = true;    

}while(!end);


