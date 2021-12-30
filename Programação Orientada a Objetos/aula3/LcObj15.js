/*
Crie uma classe Quadrado, filha da classe Retângulo do exercício 2.
*/

class Retangulo {
    constructor (lado_a, lado_b){
        if(isNaN(lado_a) || isNaN(lado_b)) throw "Valores inválidos"
        this.lado_a = lado_a;
        this.lado_b = lado_b;
    }

    area () {return this.lado_a * this.lado_b}

    imprimir (area) {return console.log(JSON.stringify(`A área do retângulo é de ${area} m²`))}
}

class Quadrado extends Retangulo {
    constructor (lado_a, lado_b) {
        if(isNaN(lado_a) || isNaN(lado_b)) throw "Valores inválidos"
        if(lado_a !== lado_b) throw "Quadrado deve possuir lados iguais"
        super (lado_a, lado_b);
    }
    
    // area () {return this.lado_a * this.lado_b}

    imprimir (area) {return console.log(JSON.stringify(`A área do quadrado é de ${area} m²`))}

}

const quad1 = new Quadrado (2, 2);

console.log(quad1.area());