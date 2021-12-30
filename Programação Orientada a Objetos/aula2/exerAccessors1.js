class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN (altura)) throw "Valores inválidos"
        this._base = base;
        this._altura = altura;
        this._cor = "blue";
    }
    get cor() {return this._cor}
    set cor(cor) {
        if(cor !== 'red' && cor !== 'blue' && cor !== 'green') throw "Cor inválida"
        this._cor = cor;
    }
    get base() {return this._base
    }
    set base (base) {
        if(isNaN(base)) throw "Valor inválido"
        this._base = base;
    }
    get altura() {return this._base
    }
    set altura(altura) {
        if(isNaN(altura)) throw "Valor inválido"
        this._altura = altura;
    }
}

const quadrado = new Quadrado(3,5);

console.log(quadrado);
quadrado.cor = "green";
console.log(quadrado);
quadrado.base = 5;
console.log(quadrado);

quadrado.banana = "banana"
console.log(quadrado);