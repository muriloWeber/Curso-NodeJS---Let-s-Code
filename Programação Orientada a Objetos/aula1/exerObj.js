class Carro {
    constructor(modelo, marca, ano, combustivel, cor, aro, preco, cambio, motor, portas) {
        this.modelo = modelo;
        this.marca = marca;
        this.ano = ano;
        this.combustivel = combustivel;
        this.cor = cor;
        this.aro = aro;
        this.preco = preco;
        this.cambio = cambio;
        this.motor = motor;
        this.portas = portas;
    }

}

class Casa {
    constructor(quartos, banheiros, metragem, cidade, preco) {
        this.quartos = quartos;
        this.banheiros = banheiros;
        this.metragem = metragem;
        this.cidade = cidade;
        this.preco = preco;
    }
}

class Quadrado {
    constructor (base, altura) {
        if(isNaN(base) || isNaN(altura)) throw "Utilize somente números";
        this.base = base;
        this.altura = altura;
        this.cor = undefined;
    }
}

const teste = new Quadrado(1, 2);

console.log(teste);

teste.cor = "verde";

console.log(teste);

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/throw */