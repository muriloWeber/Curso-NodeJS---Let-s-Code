// map
// const nums = [1, 2, 3]
// const dobro = nums.map(num => "laranja")
// // ["laranja", "laranja", "laranja"]

// console.log(dobro)

// const aplicarDesconto = preco => (preco - (preco*0.1))
// const carrinho = [9.56, 10.0, 25.90, 12.35];

// const carrinhoComDesconto = carrinho.map(aplicarDesconto)

// console.log(carrinhoComDesconto)

// const contatos = [
//   { nome: 'contato1', telefone: '000000000', tech: true },
//   { nome: 'contato2', telefone: '111111111' },
//   { nome: 'contato3', telefone: '222222222', tech: false },
//   { nome: 'contato4', telefone: '333333333', tech: true },
//   { nome: 'contato5', telefone: '444444444', tech: false },
// ];

// const arrayBoraSerTech = contatos.map(contato => {
//   return contato.tech ? {
//     ...contato,
//     boraSerTech: true,
//   } : contato;
// })

// console.log(arrayBoraSerTech);

// Filter
// const nums = [1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]
// const pares = nums.filter( num => num % 2 === 0)

// console.log(pares)

// const array = [null, undefined, false, 0, "", true, "a", 1]

// const resultado = array.filter(item => item)

// console.log(resultado)

// Reduce
const nums = [1, 2, 3]
const soma = nums.reduce((somatoria, num) => (
  somatoria + num
), "a")

console.log(soma)