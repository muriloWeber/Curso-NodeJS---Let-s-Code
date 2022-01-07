/*
Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, 
e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. 
Não havendo moeda de um tipo, a quantidade respectiva é zero.
*/

const prompt = require("prompt-sync")({ sigint: true });

function calculadoraMoedas() {
    const moedas1cent = parseInt(prompt(`Quantidade de moedas de 1 centavo: `));
    const moedas5cents = parseInt(prompt(`Quantidade de moedas de 5 centavos: `));
    const moedas10cents = parseInt(prompt(`Quantidade de moedas de 10 centavos: `));
    const moedas25cents = parseInt(prompt(`Quantidade de moedas de 25 centavos: `));
    const moedas50cents = parseInt(prompt(`Quantidade de moedas de 50 centavos: `));
    const moedas1real = parseInt(prompt(`Quantidade de moedas de 1 real: `));

    const totalEconomizado = (moedas1cent*0.01) + (moedas5cents*0.05) + (moedas10cents*0.10) + (moedas25cents*0.25) + (moedas50cents*0.5) + (moedas1real);

    console.log(totalEconomizado);
}

calculadoraMoedas();
