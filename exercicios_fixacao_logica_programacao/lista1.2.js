/*
Faça um algoritmo para calcular quantas ferraduras são necessárias para equipar todos os cavalos comprados para um haras.
*/

function qtdeFerraduras (numCavalos) {
    if(isNaN(numCavalos)) throw "A quantidade de cavalos deve ser um número";

    return console.log(`São necessárias ${numCavalos * 4} ferraduras para os cavalos do haras.`)
}

const ferraduras = qtdeFerraduras(4);