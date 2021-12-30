/**
Considere o seguinte objeto abaixo:

Implemente o valor da propriedade hasDesconto. Esse valor deve ser uma função que verifica se o preço do produto é maior do que 
450, se for, retorna verdadeiro, senão, retorna falso. Tente usar o conceito de Truthy e Falsy nessa questão.

Implemente o valor da propriedade calcularValorFinal. Esse valor deve ser uma função que calcula o valor total a pagar se houver 
desconto e se não houver desconto no produto. O valor do desconto é de 10% para cada produto com preço maior que 450. 
Use a propriedade hasDesconto para saber se há desconto. Retorne o preço final da venda (com ou sem desconto).

Mostre no console a seguinte mensagem: [Amazon] - [ventilador Arno] - [5] - [Valor Total da Venda = ???]
*/


const venda = {
    produto: "ventilador",
    marca: "Arno",
    loja: "Amazon",
    quantidade: 5,
    preco: 500,
    hasDesconto: () => (venda.preco > 450) ? 1 : 0,
    calcularValorFinal: () => (venda.hasDesconto()) ? venda.preco - ((venda.preco/100)*10) : venda.preco,
};

console.log(`${venda.loja} - ${venda.produto} ${venda.marca} - ${venda.quantidade} - 
Valor Total da Venda = ${venda.calcularValorFinal()}`);
