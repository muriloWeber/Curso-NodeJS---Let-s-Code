class Quadrado {
    constructor(base, altura){
        if(isNaN(base) || isNaN (altura)) throw "Valores inválidos"
        this.base = base;
        this.altura = altura;
        this.cor = undefined;

    }

    calcularArea(){
        return this.base * this.altura;
    }

    duplicarParaDireita(){
        this.base = this.base*2;
    }

    duplicarParaBaixo(){
        this.altura = this.altura * 2;
    }

    imprimir(){
        return `<div style='width:${this.base}px;height:${this.altura}px;background-color:${this.cor || "blue"}'></div>`;
    }
}

const quadrado = new Quadrado(3, 5);

console.log(quadrado);
console.log(quadrado.calcularArea());

const quadrado2 = new Quadrado(100, 100);
document.write(quadrado2.imprimir());

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

