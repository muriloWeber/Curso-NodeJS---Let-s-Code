const prompt = require("prompt-sync")({ sigint: true });

const tabela = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for (let i = 0; i < tabela.length; i++) {
    for (let j = 0; j < tabela[i].length; j++) {
        console.log(tabela[i][j]);
    }
}