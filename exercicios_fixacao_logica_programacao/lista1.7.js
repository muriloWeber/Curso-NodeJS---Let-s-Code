/*
Entrar com o dia e o mês de uma data e informar quantos dias se passaram desde o início do ano. 
Esqueça a questão dos anos bissextos e considere sempre que um mês possui 30 dias.
*/

function qtdeDias(dia, mes) {
    let diferencaDias = dia - 1
    let meses = (mes - 1) * 30
    console.log(`Passarem-se ${diferencaDias + meses} dias desde o início do ano.`);
}

const hoje = qtdeDias(26, 12);