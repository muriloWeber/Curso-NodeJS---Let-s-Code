const prompt = require("prompt-sync")({ sigint: true });

const tabela = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];


let coluna = parseInt(prompt("Digite a coluna desejada entre 1 e 3: "));

coluna -= 1;
let linha;

for (linha = 0; linha < tabela.length; linha++) {
    console.log(tabela[linha][coluna]);
}

// if (coluna === 1) {
//     console.log(tabela[0][0]);
//     console.log(tabela[1][0]);
//     console.log(tabela[2][0]);
// } else if (coluna === 2) {
//     console.log(tabela[0][1]);
//     console.log(tabela[1][1]);
//     console.log(tabela[2][1]);
// } else if (coluna === 3) {
//     console.log(tabela[0][2]);
//     console.log(tabela[1][2]);
//     console.log(tabela[2][2]);
// } else {
//     console.log("Opção inválida")
// }

