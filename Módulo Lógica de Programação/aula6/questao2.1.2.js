/**
Crie uma lista qualquer e faça um programa que imprima cada elemento da lista usando o for.
*/

const arr = [1,2,3,4];

for (value of arr) {
    console.log(value);
}

/*
Faça um programa que imprima todos os itens de uma lista usando while e compare com o exercício 1.
*/

let count = 0;
while (count <= arr.length) {
    console.log(arr[count]);
    count++
}