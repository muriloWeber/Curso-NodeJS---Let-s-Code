/*
A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto 
e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos.
*/

function salarioMensal (horas) {
    let horaNormal = 10;
    let horaExtra = 15;
    let imposto = (1-0.1);
    if(horas <= 176) {
        let salarioBruto = horaNormal * horas;
        let salarioLiquido = salarioBruto * imposto;
        return salarioLiquido;
    } else if(horas > 176) {
        salarioBruto = (horaNormal * 176) + (horaExtra * (horas - 176));
        salarioLiquido = salarioBruto * imposto
        return salarioLiquido
    }

}

console.log(salarioMensal(180));



