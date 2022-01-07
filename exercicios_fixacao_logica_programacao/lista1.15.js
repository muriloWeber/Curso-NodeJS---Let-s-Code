/*
Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e 
imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos,
R$33,00 para André e R$35,53 para Felipe.
*/

const conta = 107.53

const resto = conta % 3;

const teste = (conta - resto) / 3;

function rachadinha (conta) {
    let resto = conta % 3;
    let parteSemCentavos = (conta - resto) / 3;
    let parteComCentavos = parteSemCentavos + resto;
    console.log(`Parte do Carlos: R$ ${parteSemCentavos.toFixed(2)}
Parte do André: R$ ${parteSemCentavos.toFixed(2)}
Parte do Felipe: R$ ${parteComCentavos.toFixed(2)}`)
}

rachadinha(conta);