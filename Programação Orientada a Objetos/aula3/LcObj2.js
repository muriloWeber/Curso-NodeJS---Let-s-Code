/*
Crie uma classe Retângulo cujos atributos são lado_a e lado_b. 
Crie um método para calcular a área desse retângulo. 
Crie um objeto dessa classe e calcule a área e a imprima em seguida.
*/

class Retangulo {
    constructor (lado_a, lado_b){
        if(isNaN(lado_a) || isNaN(lado_b)) throw "Valores inválidos"
        if(lado_a === lado_b) throw "Retângulo deve possuir lados diferentes"
        this.lado_a = lado_a;
        this.lado_b = lado_b;
    }

    area () {return this.lado_a * this.lado_b}

    imprimir (area) {return console.log(JSON.stringify(`A área do retângulo é de ${area} m²`))}
}

const retangulo = new Retangulo(3, 5);
const area = retangulo.area();

retangulo.imprimir(retangulo.area());
