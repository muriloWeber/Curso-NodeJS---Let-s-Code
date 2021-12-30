/*
Desafio 3 - Faça um programa que pede para o usuário digitar o CPF e verifica se ele é válido. Para isso, primeiramente o programa deve multiplicar cada um dos 9 primeiros dígitos do CPF pelos números de 10 a 2 e somar todas as respostas. O resultado deve ser multiplicado por 10 e dividido por 11. O resto dessa divisão deve ser igual ao primeiro dígito verificador (10º dígito). Em seguida, o programa deve multiplicar cada um dos 10 primeiros dígitos do CPF pelos números de 11 a 2 e repetir o procedimento anterior para verificar o segundo dígito verificador.

Exemplo:

Se o CPF for 286.255.878-87 o programa deve fazer primeiro:

x = (2*10 + 8*9 + 6*8 + 2*7 + 5*6 + 5*5 + 8*4 + 7*3 + 8*2)

Em seguida, o programa deve testar se x*10%11 == 8 (o décimo número do CPF). Se sim, o programa deve calcular:

x = (2*11 + 8*10 + 6*9 + 2*8 + 5*7 + 5*6 + 8*5 + 7*4 + 8*3 + 8*2)

e verificar se x*10%11 == 7 (o décimo primeiro número do CPF).
*/

const prompt = require("prompt-sync")({ sigint: true });

let cpf = prompt("Digite seu cpf (somente números): ")

let listaCpf = [];

for (value of cpf) {
    listaCpf.push(parseInt(value));
}

let x1 = 0;
let x2 = 0;

let multiplo = 10;
let multiplo2 = 11;

for (let i = 0; i < 9; i++) {
   x1 += (listaCpf[i] * multiplo);
   multiplo--;
}

for (let i = 0; i < 10; i++) {
    if ((x1*10) % 11 === listaCpf[9]) {
        x2 += (listaCpf[i] * multiplo2);
        multiplo2--;
    }
}

if (((x1*10)%11===listaCpf[9]) && ((x2*10%11===listaCpf[10]))) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}
