/*
A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. 
Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou.
*/

function litrosComprados (latas, garrafas600, garrafas2L) {
    let lata = 0.35;
    let garrafa600 = 0.6;
    let garrafa2L = 2;
    let totalLitros = (latas*lata) + (garrafa600*garrafas600) + (garrafa2L*garrafas2L);

    return totalLitros;
}

console.log(litrosComprados(250, 175, 200));