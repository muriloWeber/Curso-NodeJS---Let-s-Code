/*
Durante a Black Friday uma loja declarou descontos em produtos do seu catálogo, de acordo com a regra abaixo:

5% para produtos abaixo de R$ 200,00

10% para produtos abaixo de R$ 400,00

15% para produtos abaixo de R$ 2000,00

20% para produtos acima de R$ 2000,00

Com base nisso, crie um programa que recebe o preço normal dos 10 produtos mais adquiridos pelos clientes e guarde-os em um array.

Em seguida, utilize a função map para aplicar o desconto nos preços e, com isso, criar um array com o preço após os descontos.
*/

const precosNormais = [33.99, 99.99, 299.90, 499.90, 1599.90, 3499.90, 5698.99, 10.90, 359.90, 999.99];

const aplicarDesconto = preco => (preco < 200) ? Math.round((preco - preco * 0.05) * 100) / 100 : (preco < 400) ? Math.round((preco - preco * 0.1) * 100) / 100 :
(preco < 2000) ? Math.round((preco - preco * 0.15) * 100) / 100 : (preco >= 2000) ? Math.round((preco - preco * 0.20) * 100) / 100 : NaN;

const precosDesc = precosNormais.map(aplicarDesconto);

console.log(precosDesc);