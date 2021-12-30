/*
Crie uma classe Fração cujos atributos são numerador (número de cima) e denominador (número de baixo).

Implemente os métodos de adição, subtração, multiplicação, divisão que retornam objetos do tipo Fração.

Implemente também o método _ repr _.

Implemente métodos para comparação: igualdade (==) e desigualdades (!=, <=, >=, < e >).
*/

class Fracao {
    constructor (numerador, denominador) {
        if(isNaN(numerador) || isNaN(denominador)) throw "Os atributos devem ser do tipo números"
        this.numerador = numerador;
        this.denominador = denominador;
    }

    somarFracoes (fracao) {
        if(fracao instanceof Fracao) {
            if(this.denominador === fracao.denominador) {
                return new Fracao (this.numerador + fracao.numerador, this.denominador);
            } else {
                let multiplicaDenominadores = this.denominador * fracao.denominador;
                let somaNumeradores = (multiplicaDenominadores / this.numerador * this.denominador) + 
                (multiplicaDenominadores / fracao.numerador * fracao.denominador);
                return new Fracao (somaNumeradores, multiplicaDenominadores);
            }
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    subtrairFracoes (fracao) {
        if(fracao instanceof Fracao) {
            if(this.denominador === fracao.denominador) {
                return new Fracao (this.numerador - fracao.numerador, this.denominador)
            } else {
                let multiplicaDenominadores = this.denominador * fracao.denominador;
                let subtraiNumeradores = (multiplicaDenominadores / this.numerador * this.denominador) -
                (multiplicaDenominadores / fracao.numerador * fracao.denominador);
                return new Fracao (subtraiNumeradores, multiplicaDenominadores);
            }
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    multiplicarFracoes (fracao) {
        if(fracao instanceof Fracao) {
            return new Fracao (this.numerador * fracao.numerador, this.denominador * fracao.denominador);
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    dividirFracoes (fracao) {
        if(fracao instanceof Fracao) {
            return new Fracao (this.numerador * fracao.denominador, this.denominador * fracao.numerador);
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    igual (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 === decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    diferente (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 !== decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    maior (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 > decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    menor (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 < decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    maiorOuIgual (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 >= decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    menorOuIgual (fracao) {
        if(fracao instanceof Fracao) {
            let decimal1 = this.numerador / this.denominador;
            let decimal2 = fracao.numerador / fracao.denominador;
            return (decimal1 <= decimal2) ? true : false
        } else {
            throw "O parâmetro deve ser da classe Fracao"
        }
    }

    print () {return console.log(JSON.stringify(`${this.numerador} | ${this.denominador}`))}
    
}

const fracao1 = new Fracao (1, 2);
const fracao2 = new Fracao (1, 8);

fracao1.somarFracoes(fracao2).print();
fracao1.dividirFracoes(fracao2).print();
console.log(fracao1.maior(fracao2));
console.log(fracao1.menor(fracao2));
fracao1.print();


