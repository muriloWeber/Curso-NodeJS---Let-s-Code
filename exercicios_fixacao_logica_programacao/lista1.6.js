/*
O restaurante a quilo Bem-Bão cobra R$12,00 por cada quilo de refeição. Escreva um algoritmo que leia o peso do prato montado pelo cliente 
(em quilos) e imprima o valor a pagar. Assuma que a balança já desconte o peso do prato.
*/

function balanca(peso) {
    console.log(`R$ ${peso * 12}`);
}

const murilo = balanca(1.230);