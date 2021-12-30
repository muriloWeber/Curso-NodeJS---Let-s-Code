/*
A imobiliária Imóbilis vende apenas terrenos retangulares. Faça um algoritmo para ler as dimensões de um terreno e depois exibir a área do terreno.
*/

function areaTerreno(ladoA, ladoB) {
    if(isNaN(ladoA) || isNaN (ladoB)) throw "Os lados do terreno devem ser números";
    if(ladoA === ladoB) throw "A imobiliária vende somente terrenos retangulares, que por sua vez, possuem lados diferentes)";

    return console.log(`O terreno possui ${ladoA * ladoB}m².`);
}

const area1 = areaTerreno(3,4);
