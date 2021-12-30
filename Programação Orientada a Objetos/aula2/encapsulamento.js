// function Quadrado(base, altura) {
//   this.base = base;
//   this.altura = altura;
//   let cor = 'blue';
// }

// const quadrado = new Quadrado(3, 5);

// console.log(quadrado);
// console.log(quadrado.cor);
// quadrado.cor = 'green';

// function createQuadrado(base, altura) {
//   let cor = 'blue';

//   return {
//     base,
//     altura,
//     getCor: function() { return cor; },
//   }
// }

// const quadrado = createQuadrado(3, 5);
// console.log(quadrado);
// console.log(quadrado.cor);
// quadrado.cor = 'green';
// console.log(quadrado.getCor());

class Quadrado {
  constructor(base, altura) {
    let cor = 'blue';
    this.base = base;
    this.altura = altura;
    this.getCor = function() { return cor; };
  }
}

const quadrado = new Quadrado(3, 5);
console.log(quadrado);
console.log(quadrado.getCor());
quadrado.cor = 'green';
console.log(quadrado.cor);
console.log(quadrado.getCor());
console.log(quadrado);
