/*
Faça uma classe ContaVip que difere da ContaCorrente por ter cheque especial (novo atributo) e é filha da classe ContaCorrente. 
Você precisa implementar os métodos para saque, transferência ou depósito?
*/

class Cliente {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

class ContaCorrente {
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

class ContaVip extends ContaCorrente {
    constructor (cliente, saldo, chequeEspecial) {
        super (cliente, saldo);
        this.chequeEspecial = chequeEspecial;
        this.chequeEspUsado = 0;
    }

    depositar (valor) {
        if(this.chequeEspUsado > 0) {
            this.saldo += (valor - this.chequeEspUsado);
            this.chequeEspUsado -= (valor - this.saldo);
        } else {
            return this.saldo += valor
        }
    } 

    sacar (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        } else if (valor > this.saldo && (valor - this.saldo) <= this.chequeEspecial) {
            this.chequeEspUsado += (valor - this.saldo);
            this.saldo -= (valor - this.chequeEspUsado);
        } else {
            console.log(`Saldo combinado insuficiente. Saldo atual: R$ ${this.saldo} e Limite Cheque Especial disponível R$ ${this.chequeEspecial - this.chequeEspUsado}`)
        }
    }

    transferir (valor, contaDestino) {
        if(valor <= this.saldo) {
            this.saldo -= valor;
            if(contaDestino instanceof ContaVip) {
                if(contaDestino.chequeEspUsado > 0) {
                    contaDestino.saldo += (valor - contaDestino.chequeEspUsado);
                    contaDestino.chequeEspUsado -= (valor - contaDestino.saldo);
                } else {
                contaDestino.saldo += valor;
                }
            } else {
                contaDestino.saldo += valor;
            }
        } else if (valor > this.saldo && (valor - this.saldo) <= this.chequeEspecial) {
            this.chequeEspUsado += (valor - this.saldo);
            this.saldo -= (valor - this.chequeEspUsado);
        } else {
            console.log(`Saldo combinado insuficiente. Saldo atual: R$ ${this.saldo} - Limite Cheque Especial disponível: R$ ${this.chequeEspecial - this.chequeEspUsado}`)
        }
        
    }
}

const cliente1 = new Cliente ("Murilo", 35, "@gmail.com");
const cliente2 = new Cliente ("maria", 29, "@yahoo");

const contaVip1 = new ContaVip (cliente1, 10000, 1000);
const conta1 = new ContaCorrente (cliente2, 1000, 100);

contaVip1.transferir(10500, conta1);

console.log(conta1);
console.log(contaVip1);

