// let matriz = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i']
// ];

// console.log(matriz[1][0]);

/*
 Faça um programa que olhe todos os itens de uma lista e diga quantos deles são pares.
*/

// let arr = [1,2,3,4,5,6,7,8,9];

// for (value of arr) {
//     console.log(value);
// }

let cachorro = {
    nome: 'Bob',
    idade: 2,
    dono: 'Carlos',
    latir: () => console.log('Woof'),
    comer: function(comida){
      console.log(this.nome+' está comendo '+comida)
    }
  }
  
  cachorro.comer('ração');

  let carro = {
    modelo: 'Opala',
    marca: "GM",
    ano: 1975,
    cor: "Azul",
    combustível: "Gasolina",
        acelerar: () => console.log('vruuum'),
    abastecer: () => console.log("galão...galão...galão")
}

console.log(carro);