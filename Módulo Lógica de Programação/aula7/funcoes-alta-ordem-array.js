//find
// const contatos = [
//   { nome : 'contato1', telefone : '000000000'},
//   { nome : 'contato2', telefone : '111111111'},
//   { nome : 'contato3', telefone : '222222222'},
//   { nome : 'contato4', telefone : '333333333'},
//   { nome : 'contato5', telefone : '444444444'},
// ];

// const contato = contatos.find((contato) => contato.telefone === "333333333")

// console.log(contato.nome)

//findIndex
// const nums = [1, 2, 3]
// const indexOf3 = nums.findIndex(num => num === 3)

// console.log(indexOf3)

//forEach
const nums = [1, 2, 3]
// nums.forEach(console.log)
nums.forEach((num, index, arr) => console.log(num, index, arr))

//every
// const nums1 = [10, 20, 30, 40]
// const nums2 = [11, 20, 30, 40]

// const ePar = num => num % 2 === 0;

// const nums1SaoPar = nums1.every(ePar)
// const nums2SaoPar = nums2.every(ePar)

// console.log(nums2SaoPar)
