/*
Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00

10% para produtos abaixo de R$ 400,00

15% para produtos abaixo de R$ 2000,00

20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.
*/

const prompt = require("prompt-sync")({ sigint: true });

const precosNormais = []
let count = 0;
while(count < 10) {
    if(count === 0) {
        let preco = parseFloat(prompt(`Digite o preço do primeiro item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 1) {
        preco = parseFloat(prompt(`Digite o preço do segundo item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 2) {
        preco = parseFloat(prompt(`Digite o preço do terceiro item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 3) {
        preco = parseFloat(prompt(`Digite o preço do quarto item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 4) {
        preco = parseFloat(prompt(`Digite o preço do quinto item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 5) {
        preco = parseFloat(prompt(`Digite o preço do sexto item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 6) {
        preco = parseFloat(prompt(`Digite o preço do sétimo item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 7) {
        preco = parseFloat(prompt(`Digite o preço do oitavo item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 8) {
        preco = parseFloat(prompt(`Digite o preço do nono item mais vendido: `));
        precosNormais.push(preco);
        count++
    } else if (count === 9) {
        preco = parseFloat(prompt(`Digite o preço do décimo item mais vendido: `));
        precosNormais.push(preco);
        count++
    }
}

const regrasDesconto = preco => (preco < 200.00) ? Math.round((preco - preco * 0.05) * 100) / 100 : (preco < 400.00) ? Math.round((preco - preco * 0.1) * 100) / 100 :
(preco < 2000.00) ? Math.round((preco - preco * 0.15)* 100) / 100 : (preco >= 2000.00) ? Math.round((preco - preco * 0.20)* 100) / 100 : NaN;

const precosDesc = precosNormais.map(regrasDesconto);

console.log(precosDesc);

