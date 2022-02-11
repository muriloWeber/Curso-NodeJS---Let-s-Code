const {maiorDeIdade, imprimeIdade} = require('./verificador-de-idade');

const args = process.argv;
const idade = args[2];
// node, script, idade



//console.log({args}); // só pra ver os argumentos

imprimeIdade(idade);
console.log(maiorDeIdade(idade));