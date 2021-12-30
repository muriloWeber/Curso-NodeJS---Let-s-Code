const prompt = require("prompt-sync")({ sigint: true });

const codigoProduto = parseInt(prompt("Digite o código do produto: "));

if(codigoProduto === 1){
    console.log("1 - Alimento não-perecível");
} else if(codigoProduto === 2 || codigoProduto === 3 || codigoProduto === 4) {
    console.log("2, 3 ou 4 - Alimento perecível");
} else if (codigoProduto === 5 || codigoProduto === 6){
    console.log("5 ou 6 - Vestuário");
} else if (codigoProduto === 7){
    console.log("7 - Higiene pessoal");
} else if(codigoProduto === 8 || codigoProduto === 9 || codigoProduto === 10) {
    console.log("8, 9, 10 - Utensílios domésticos");
} else {
    console.log("Código inválido")
}