/*
Faça um algoritmo para ler o salário de um funcionário e aumentá-Io em 15%. Após o aumento, desconte 8% de impostos. 
Imprima o salário inicial, o salário com o aumento e o salário final.
*/

const salarioBase = 10000;

function calculaLiquido (salario) {
    let aumento = salario * (1+0.15);
    let descImpostos = aumento * (1-0.08);
    return descImpostos
}

console.log(calculaLiquido(salarioBase));