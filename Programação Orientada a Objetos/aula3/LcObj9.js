/*
Com base no exercício anterior, crie um sistema de cadastro e a classe Cliente. Seu programa deve perguntar se o usuário quer cadastrar um novo cliente, 
alterar um cadastro ou sair.

Dica: Você pode fazer esse exercício criando uma classe Sistema, que irá controlar o sistema de cadastros. Essa classe deve ter o atributo cadastro e 
os métodos para imprimir os cadastrados, cadastrar um novo cliente, alterar um cadastro ou sair.
*/
const prompt = require("prompt-sync")({ sigint: true });

class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class Sistema {
    constructor(){
        this.cadastro = [];
    }
    
    incluir (nome, idade, email) {
        this.cadastro.push(new Cliente(nome, idade, email));
    }

    alterar (nome) {
        const byName = nome => cadastro => cadastro.nome === nome;
        let index = this.cadastro.findIndex(byName(nome));
        let newNome = prompt("Digite novo nome: ");
        let newIdade = prompt("Digite nova idade: ");
        let newEmail = prompt("Digite novo email: ");
        this.cadastro[index] = new Cliente(newNome, newIdade, newEmail);
    }

    imprimir () {
        console.log(this.cadastro);
    }

    systemRun () {
        let end = false
        do {
            const userOption = parseInt(prompt(`Digite a opção desejada:\n1-Incluir\n2-Alterar\n3-Imprimir Relação Cadastros\n4-Sair\n`));
            if(userOption === 4) {
                end = true;
            } else if (userOption === 1){
                sistema.incluir(prompt(`Digite o nome: `), prompt(`Digite a idade: `), prompt(`Digite o email: `))
            } else if (userOption === 2){
                sistema.alterar(prompt(`Digite o nome do cadastro que deseja alterar: `));
            } else if (userOption === 3){
                sistema.imprimir();
            } else {
                throw "Opção inválida"
            }
        
        }while(!end);
    }
}

const sistema = new Sistema();

sistema.systemRun();



