/*
Crie uma classe Bola cujos atributos são cor e raio. 
Crie um método que imprime a cor da bola. 
Crie um método para calcular a área dessa bola. 
Crie um método para calcular o volume da bola. 
Crie um objeto dessa classe e calcule a área e o volume, imprimindo ambos em seguida.

Obs.:

Área da esfera = 4*3.14*r*r;

Volume da esfera = 4*3.14*r*r*r/3
*/

class Bola {
    constructor (cor, raio) {
        this._cor = cor;
        this._raio = raio;
    }
    get cor () {return this._cor
    }
    get raio () {return this._raio
    }

    imprimir () {
        return console.log(JSON.stringify(this._cor));
    }

    area () {
        return Math.round((4 * 3.14 * Math.pow(this._raio, 2)) * 100) / 100;
    }

    volume () {
        return Math.round((4 * 3.14 * Math.pow(this._raio, 3) / 3) *100) / 100;
    }
}

const bola = new Bola("branca", 20);

console.log(bola.area());

console.log(bola.volume());

bola.imprimir();