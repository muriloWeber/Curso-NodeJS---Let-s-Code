/*
Faça um programa para simular uma situação simples de depósito, retirada e consulta em um banco.
Exiba o seguinte menu com as opções:

1 - Depósito
2 - Retirada
3 - Saldo
4 - Sair do algoritmo
Se a escolha do usuário for depósito ou retirada, o algoritmo deverá pedir o valor da operação e 
atualizar automaticamente o valor existente na conta.
O algoritmo deverá ser utilizado até que o usuário escolha a opção sair do algoritmo.
*/

const prompt = require("prompt-sync")({ sigint: true });

let end = false
let saldo = 0;

do {
    const userOption = parseInt(prompt("Digite o número desejado entre as opções:\n1 - Depósito\n2 - Retirada\n3 - Saldo\n4 - Sair do algoritmo\n"));
    if (userOption === 4){
        end = true;
    } else if (userOption === 1) {
        let valorDeposito = parseFloat(prompt("Digite o valor a ser depositado: R$ "));
        saldo += valorDeposito;
    } else if (userOption === 2) {
        let valorSaque = parseFloat(prompt("Digite o valor que deseja sacar: R$ "));
        saldo -= valorSaque;
    } else if (userOption === 3) {
        console.log("Você tem R$ " + saldo + " em conta.")
    } else {
        console.log("Opção inválida. Tente novamente.")
    }
} while (!end);