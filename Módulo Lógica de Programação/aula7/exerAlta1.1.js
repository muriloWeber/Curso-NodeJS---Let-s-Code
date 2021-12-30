/*
Crie um código que recebe um email e senha através de input e exiba na tela se a autenticação ocorreu com sucesso ou se email/senha estão inválidos.
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

const email = prompt("Usuário: ");
const senha = prompt("Senha: ");

const login = usuarios.find(x => (x.email === email && x.senha === senha)) ? console.log("Login efetuado com sucesso") : console.log("Email/Senha inválidos");

// (login === true) ?  : ;
