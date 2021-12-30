class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

class Cidadao extends Pessoa{
    constructor(nome, idade, cpf, rg){
        super(nome, idade);
        this.cpf = cpf;
        this.rg = rg;
    }
}

const cidadao = new Cidadao('Cris', 25, "0000", "1111");

console.log(cidadao instanceof Cidadao);
console.log(cidadao instanceof Pessoa);

