/*
Criar uma função media de 2 números utilizando apenas a função calcular; media(a,b)
*/

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar  = (a, b) => a * b;
const dividir = (a, b) => b > 0 ? a / b : NaN;
const calcular = (operacao, a, b) => operacao(a,b)

const media = (a, b) => calcular(dividir, calcular(somar, a, b), 2);

/*
Criar uma função que diz qual foi o valor de 10% de desconto para um produto passando o seu preço. desconto(preco)
*/

const precoComDesconto = (preco) => calcular(subtrair, preco, calcular(multiplicar, preco, 0.1))