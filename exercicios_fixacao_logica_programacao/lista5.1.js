/*
Elaborar uma calculadora com as seguintes operações: soma, subtração, multiplicação e divisão. 
A calculadora deverá ter um menu informando as opções de operação e após apresentar o resultado ao usuário, 
deverá solicitar se o usuário deseja fazer novo cálculo ou se deseja encerrar o programa.
*/

const prompt = require("prompt-sync")({ sigint: true });

function calculadora (operacao) {
    
    let numero1 = parseFloat(prompt(`Digite o primeiro número que deseja operar: `));
    let numero2 = parseFloat(prompt(`Digite o segundo número que deseja operar: `));
    
    const operacoes = {
        '1': numero1 + numero2,
        '2': numero1 - numero2,
        '3': numero1 * numero2,
        '4': numero1 / numero2, 

    }
    
    
    console.log(`A solução da operação é: ${operacoes[operacao]}`)

}

let end = false

do{
    const operacao = prompt(`Digite o código operação que deseja realizar: 
    1 - soma
    2 - subtração
    3 - multiplicação 
    4 - divisão
    `);
    
    calculadora(operacao);

    const userChoice = prompt(`Digite 1 para fazer outra operação ou 0 para sair: `);
    if(userChoice === '0') end = true;    

}while(!end)
