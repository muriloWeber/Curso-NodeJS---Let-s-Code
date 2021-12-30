/*
Crie uma classe ContaCorrente com os atributos cliente (que deve ser um objeto da classe Cliente) e saldo. Crie métodos para depósito, 
saque e transferência. Os métodos de saque e transferência devem verificar se é possível realizar a transação.
*/

class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class contaCorrente {
    constructor (cliente, saldo) {
        if (cliente instanceof Cliente) {
            this.cliente = cliente;
            this.saldo = saldo;
        } else {
            throw "Cliente deve ser da classe Cliente"
        }
    }
    
    depositar (valor) {return this.saldo += valor}

    sacar (valor) {
        (valor <= this.saldo) ? this.saldo -= valor : console.log(`Saldo insuficiente. Saldo atual: R$ ${this.saldo}`)
    }

    transferir (valor, contaDestino) {
        if(valor <= this.saldo) {
            this.saldo -= valor;
            contaDestino.saldo += valor; 
        } else {
            console.log(`Saldo insuficiente. Saldo atual: R$ ${this.saldo}`)
        }
    }
}

const cliente1 = new Cliente ("Murilo", 35, "@gmail");
const cliente2 = new Cliente ("Maria", 49, "@yahoo");

const conta1 = new contaCorrente (cliente1, 1000.00);
const conta2 = new contaCorrente (cliente2, 1000.00);

console.log(conta1);
console.log(conta2);

conta1.transferir(500, conta2);
conta1.depositar(50);
conta1.sacar(750);

console.log(conta1);
console.log(conta2);