/*
Faça um programa que peça para o usuário digitar a idade, o salário e o sexo de uma pessoa até que as entradas digitadas 
sejam válidas:
Idade: entre 0 e 150;
Salário: maior que 0;
Gênero: M, F ou Outro.
*/

const prompt = require("prompt-sync")({ sigint: true });

let end = false;

do {
    const idade = parseInt(prompt("Digite a idade: "));
    if (idade >= 0 && idade <= 150) {
        const salario = parseFloat(prompt("Digite o salário: "));
        if (salario > 0) {
            const genero = prompt("Digite o gênero (M, F ou Outro): ");
            if (genero === "M" || genero === "F" || genero === "Outro") {
                end = true;
            } else {
                console.log("Entrada inválida.");
            }
        } else {
            console.log("Entrada inválida.");
        }
    } else {
        console.log("Entrada inválida");
    }
} while (!end);