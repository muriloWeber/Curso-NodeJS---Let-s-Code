/*
Crie um código que recebe uma idade mínima e idade máxima através de input e exiba na tela quais usuários foram encontrados com os critérios da busca.
*/

const prompt = require("prompt-sync")({ sigint: true });

const usuarios = [
    {
        id: 1,
        nome: 'Nathan',
        idade: 28,
        email: 'nathan@gmail.com',
        senha: '1234'
    },
    {
        id: 2,
        nome: 'Alan',
        idade: 30,
        email: 'alan@gmail.com',
        senha: '4321'
    },
    {
        id: 3,
        nome: 'Alberto',
        idade: 35,
        email: 'alberto@gmail.com',
        senha: '7263'
    },
    {
        id: 4,
        nome: 'Jeferson',
        idade: 25,
        email: 'jeferson@gmail.com',
        senha: '5242'
    },
];

const idadeMin = parseInt(prompt("Digite a idade mínima de busca: "));
const idadeMax = parseInt(prompt("Digite a idade máxima de busca: "));

const buscaUsers = usuarios.filter( x => {
    if (x.idade >= idadeMin && x.idade <= idadeMax) return x
});

console.log(buscaUsers);