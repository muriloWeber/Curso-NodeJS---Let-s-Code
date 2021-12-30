/*
Uma fábrica controla o tempo de trabalho sem acidentes pela quantidade de dias. Faça um algoritmo para converter este tempo em anos, 
meses e dias. Assuma que cada mês possui sempre 30 dias.
*/

const diasSemAcidentes = 81;

function conversor (diasSemAcidentes) {
    let anos = Math.floor(diasSemAcidentes / 360);
    let meses = Math.floor((diasSemAcidentes%360)/30);
    let dias = Math.ceil((diasSemAcidentes%360)%30);
    console.log(`Estamos a ${anos} ano(s), ${meses} mes(es) e ${dias} dia(s) sem acidentes neste local de trabalho.`)
}

const converte = conversor(diasSemAcidentes);