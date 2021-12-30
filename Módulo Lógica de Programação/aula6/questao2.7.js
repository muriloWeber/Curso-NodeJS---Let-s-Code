/**
Faça um programa que, dadas duas listas de mesmo tamanho, crie uma nova lista com cada elemento igual a soma dos elementos da lista 1 com os da lista 2, 
na mesma posição.
*/

const lista1 = [1, 4, 5];
const lista2 = [2, 2, 3];

function somaArrays (array1, array2) {
    let resultado = [];    
    if (array1.length === array2.length)
     {
        for (let i = 0; i < array1.length; i++) {
            resultado.push(array1[i] + array2[i]);
        } return resultado;
    } else {
        return "Os arrays não possuem o mesmo tamanho!"
    }
}

console.log(somaArrays(lista1, lista2));