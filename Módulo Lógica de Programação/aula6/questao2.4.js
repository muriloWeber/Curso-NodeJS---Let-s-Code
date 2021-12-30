/*
 Faça um programa que olhe todos os itens de uma lista e diga quantos deles são pares.
*/

let arr = [1,2,3,4,5,6,7,8,9];
let pares = 0

for (value of arr) {
    if (value % 2 === 0){
        pares++
    }
}

console.log(pares);