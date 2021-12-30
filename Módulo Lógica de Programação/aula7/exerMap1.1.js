/*
Crie um código que receba a porcentagem de desconto que vai insidir sob o preço dos produtos e siga as regras de validação abaixo:

Utilize map para gerar o novo array que possue uma propriedade com o valor do produto com desconto
Exiba na tela em um UL o nome de cada produto, preço atual, preço com desconto.
Dica: considere a fórmula

numero - (numero * (porcentagemDesconto / 100))
para aplicar a porcentagem de desconto, por exemplo se o valor do produto é 3000 e a porcentagem de desconto 10%, a fórmula ficaria assim: 3000 - (3000 * (10 / 100))

*/

const produtos = [
    {
        id: 1,
        nome: 'Galaxy S21',
        preco: 5000
    },
    {
        id: 2,
        nome: 'Galaxy A51',
        preco: 1500
    },
    {
        id: 3,
        nome: 'Iphone 12',
        preco: 12000
    }
];

const produtosComDesconto = produtos.map( x => {
    return {
        ...x,
        precoComDesconto : x.preco - (x.preco * (10 / 100)),
    }
})

console.log(produtosComDesconto);