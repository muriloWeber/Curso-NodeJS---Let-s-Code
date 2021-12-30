const a = 1;
const b = 2;

const igualdade = a == b;
const diferente = a != b;
const maior = a > b;
const maiorOuIgual = a >= b;
const menorOuIgual = a <= b;
const menor = a < b;

const and = igualdade && diferenca;
const or = igualdade || diferenca;

const not = !igualdade;

//para verificar igualdade de TIPO

const igualdadeRestrita = a === b;
const diferencaRestrita = a !== b;

// console.log("10" == 10);
// console.log("10" === 10);

// const valor = 0;

// if(valor) {
//     console.log("Estou aqui");
// }

let souDev = true;

if (souDev) {
    console.log("Bora ser Tech");
} else {
    console.log("Não quero");
}

//operador ternário

let serTech = souDev ? 'Bora ser Tech' : 'Não quero';

