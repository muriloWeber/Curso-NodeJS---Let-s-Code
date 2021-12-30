const prompt = require("prompt-sync")({ sigint: true });

const codigoProduto = parseInt(prompt("Digite o código do produto: "));

switch (codigoProduto) {
    case 1:
        console.log("Alimento não-perecível");
        break;
    case 2:
    case 3:
    case 4:
        console.log("Alimento perecível");
        break;
    case 5:
    case 6:
        console.log("Vestuário");
        break;
    case 7:
        console.log("Higiene pessoal");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Utensílios domésticos");
        break;
    default:
        console.log("Código Inválido");
        break;
}