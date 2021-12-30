/*
Implemente um código para aprovar empréstimo bancário. 
O código deve pedir 3 informações: valor do empréstimo, 
número de parcelas e salário do solicitante. 
Aprovar empréstimo caso o valor das parcelas representem 
no máximo 30% do salário do solicitante.
*/

const prompt = require("prompt-sync")({ sigint: true });

const valorEmpres = parseFloat(prompt("Digite valor do empréstimo: "));
const parcelas = parseInt(prompt("Digite o número de parcelas: "));
const salario = parseFloat(prompt("Digite o salário do solicitante: "));

const valorParcela = valorEmpres / parcelas;
const percentParSal = (valorParcela / salario)*100;

let aprovacao = false

if(percentParSal <= 30) {
    aprovacao = true;
    console.log("O empréstimo foi aprovado");
}else {
    aprovacao = false;
    console.log("O empréstimo foi reprovado");
}
console.log(aprovacao);