/*
Crie uma classe Cliente cujos atributos são nome, idade e e-mail. Construa um método que imprima as informações tal como abaixo:

Nome: Fulano de Tal

Idade: 40

E-mail: fulano@mail.com
*/

class Cliente {
    constructor (nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    imprimir () {
        return console.log(`Nome: ${this.nome}\n\nIdade: ${this.idade}\n\nE-mail: ${this.email}`);
    }
}

const cliente1 = new Cliente("Fulano de Tal", 40, "fulano@mail.com");

cliente1.imprimir();