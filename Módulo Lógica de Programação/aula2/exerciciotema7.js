/*
A empresa XKW concedeu um bônus de 20% do valor do salário 
a todos os funcionários com tempo de trabalho na empresa igual 
ou superior a 5 anos e de 10% aos demais. 
Faça um algoritmo que receba o salário e o tempo de serviço de 
um funcionário, calcule e mostre o valor do bônus recebido por ele.
 */

const prompt = require("prompt-sync")({ sigint: true });

const salario = parseFloat(prompt("Digite o valor do salário: "));
const tempoServico = parseFloat(prompt("Digite seu tempo de serviço: "));

if(tempoServico >= 5){
    const bonus20 = (salario/100)*20;
    console.log("Valor calculado do bônus é de " + bonus20 + " reais.");
}else{
    const bonus10 = (salario/100)*10;
    console.log("Valor calculado do bônus é de " + bonus10 + " reais.");
}