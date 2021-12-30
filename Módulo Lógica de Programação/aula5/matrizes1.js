const tabela = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

{
  // console.log(tabela[0][0]);
  // console.log(tabela[0][1]);
  // console.log(tabela[0][2]);
  // console.log(tabela[1][0]);
  // console.log(tabela[1][1]);
  // console.log(tabela[1][2]);
  // console.log(tabela[2][0]);
  // console.log(tabela[2][1]);
  // console.log(tabela[2][2]);
  // for (let i = 0; i < tabela.length; i++) {
  //   console.log(tabela[i][0]);
  //   console.log(tabela[i][1]);
  //   console.log(tabela[i][2]);
  // }
}

// for (let i = 0; i < tabela.length; i++) {
//   for (let j = 0; j < tabela[i].length; j++) {
//     console.log(tabela[i][j]);
//   }
// }

// DESTRUCTING E SPREAD OPERATOR

// const tabela2 = [...tabela];
// const tabela2ComSpread = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// const tabela3 = [tabela];
// const tabela3SemSpread = [
//   [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]
// ]

// console.log(tabela);
// console.log(tabela2);

// Usando o spread operator para fazer cópias
const arr1 = [1, 2, 3, 4, 5];
const copiaArr1 = [...arr1];
const arr2 = [4, 5, 6, ...arr1, 7, 8, 9];

// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];

// destructuring ou desestruturação
// const [a, b, c] = arr1;
const [a, ...resto] = arr1;

console.log(a);
console.log(b);
// console.log(c);
console.log(resto);
