const {maiorDeIdade, imprimeIdade} = require('./verificador-de-idade');
const verificaIdadeASCII = require('./verifica-idade-ascii');

const args = process.argv; // o process.argv permite passar o argumento na linha de chamada do scripit
const IDADE_PADRAO = 10;
const idade = args[2] ?? IDADE_PADRAO 
// node, script, idade

//módulo nativo do node para ler dados do terminal
// https://nodejs.org/docs/latest-v16.x/api/readline.html
const readline = require('readline')

console.clear();
imprimeIdade(idade);
console.log(`A pessoa é maior de idade? ${maiorDeIdade(idade) ? 'sim' : 'não'}`);
console.log(`--------------\n\nTerminal interativo:\n`);

//criamos uma instância do readline usando como input/output o stdin, o terminal onde vai rodar o nodejs
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual idade verificar?\n', function(idade) {
    verificaIdadeASCII (idade);

    rl.close();
});

//console.log({args}); // só pra ver os argumentos
//console.log(maiorDeIdade(idade));