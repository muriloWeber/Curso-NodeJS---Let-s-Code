/*
Escreva um algoritmo para ler o nome e a idade de uma pessoa, e exibir quantos dias de vida ela possui. Considere sempre anos completos, 
e que um ano possui 365 dias. Ex: uma pessoa com 19 anos possui 6935 dias de vida; veja um exemplo de saída: MARIA, VOCÊ JÁ VIVEU 6935 DIAS
*/

function diasDeVida(dataNascimento) {
    // Converta as datas em milissegundos
    let dataInicialMilissegundos = new Date (dataNascimento).getTime();
    let dataFinalMilissegundos = Date.now();
    // Transforme 1 dia em milissegundos
    let umDiaMilissegundos = 1000*60*60*24;
    // Calcule a diferença em milissegundos
    let diferencaMilissegundos = dataFinalMilissegundos - dataInicialMilissegundos;
    // Converta novamente para data
    let diferencaData = Math.round(diferencaMilissegundos/umDiaMilissegundos);
    // Exibe diferença
    console.log(`Essa pessoa possui ${diferencaData} dias de vida.`);
}

const murilo = diasDeVida("11/27/1986");