// const somar = (a, b) => a+b;
// const subtrair = (a, b) => a-b;
// const multiplicar = (a, b) => a*b;
// const dividir = (a, b) => b > 0 ? a/b : NaN;

// const calcular = (operacao, a, b) => operacao(a,b)

// const resultado = calcular(somar, 1, 2);

/**
 * O usuário vai digitar uma operação (+ - * /) e 2
 * parâmetros. Realize o calculo pedido pelo usuário.
 */

/**
 * Criar uma função media de 2 números utilizando apenas
 * a função calcular; media(a,b)
 */
// const media = (a,b) => calcular(dividir, calcular(soma,a,b), 2); 

/**
 * Criar uma função que diz qual foi o valor do produto
 * após 10% de desconto passando o seu preço. 
 * desconto(preco)
 */
// const precoComDesconto = (preco) => calcular(subtrair, preco, calcular(multiplicar, preco, 0.1))

// const valorProduto = 1000

// const valorFinal = precoComDesconto(valorProduto)

// console.log(valorFinal)

// console.log(resultado)

const creteFormatContactFor = (software) => {
    if(software === "programa1") {
      return contato => JSON.stringify(contato)
    }
  
    if(software === "programa2") {
      return contato => (
      `<contato>
        <nome>${contato.nome}</nome>
        <telefone>${contato.telefone}</telefone>
      </contato>
      `
    )}
  }
  
  const formatContato = creteFormatContactFor("programa1")
  
  const contato = {
    nome: "Cristian",
    telefone: '0000000000000'
  }
  
  console.log(formatContato(contato))