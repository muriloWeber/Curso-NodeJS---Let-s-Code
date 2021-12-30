const prompt = require("prompt-sync")({ sigint: true });

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const numero = randomIntFromInterval(1, 10);
// let apostaUsuario;
// do {
//   apostaUsuario = parseInt(prompt("Digite um número entre 1 e 10: "));
//   if (apostaUsuario !== numero) {
//     apostaUsuario = console.log("Tente novamente!");
//   }
// } while (apostaUsuario !== numero);

// console.log("Parabéns! Você acertou!");

// let acabou = false;
// do {
//   const dado = parseInt(
//     prompt(
//       "Digite a quantidade de lados do dado (4, 6, 8, 10, 12, 20) ou 0 para terminar: ",
//     ),
//   );

//   if (
//     dado === 4 ||
//     dado === 6 ||
//     dado === 8 ||
//     dado === 10 ||
//     dado === 12 ||
//     dado === 20
//   ) {
//     console.log(randomIntFromInterval(1, dado));
//   } else if (dado === 0) {
//     acabou = true;
//   } else {
//     console.log("Valor inválido!");
//   }
// } while (!acabou);

//1. Faça um algoritmo que mostre a tabuada do número 5.
// (considerar tabuada do número 1 ao 10).

//2. Faça um algoritmo que mostre a tabuada de qualquer
// número escolhido pelo usuário (considerar tabuada
// do número 1 ao 10).

console.log(randomIntFromInterval(1, 15));
