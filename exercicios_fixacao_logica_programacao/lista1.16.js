/*
A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e 
uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hambúrguer pesa 100 gramas, 
faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, 
presunto e carne necessários para compra.
*/

function qtdeInsumos (numeroSanduiches) {
    let pesoQueijo = 50;
    let pesoPresunto = 50;
    let pesoHamburger = 100;
    let totalQueijo = (pesoQueijo * 2) * numeroSanduiches / 1000;
    let totalPresunto = pesoPresunto * numeroSanduiches / 1000;
    let totalHamburger = pesoHamburger * numeroSanduiches / 1000;

    console.log(`Para a quantidade de ${numeroSanduiches} sanduíches:
Total de queijo a ser comprado: ${totalQueijo.toFixed(2)} Kg
Total de Presunto a ser comprado: ${totalPresunto.toFixed(2)} Kg
Total de Haburguer a ser comprado: ${totalHamburger.toFixed(2)} Kg`)
}

qtdeInsumos(349);
