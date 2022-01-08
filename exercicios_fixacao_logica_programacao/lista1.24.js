/*
Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. 
Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário).
*/

const prompt = require("prompt-sync")({ sigint: true });

const userInput = parseFloat(prompt(`Digite quantos litros de refresco deseja fazer: `));

function calculadoraRefresco (litros) {
    let parte = litros / 10;
    let litrosAgua = parte * 8;
    let litrosSuco = parte * 2;

    console.log(`Para fazer ${litros} litros de refresco serão necessários ${litrosAgua} litros de água mineral e ${litrosSuco} litros de suco de maracujá.`)
}

calculadoraRefresco(userInput);