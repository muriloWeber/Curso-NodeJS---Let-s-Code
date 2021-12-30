const prompt = require("prompt-sync")({ sigint: true });

const notas = [];

const nota1 = parseFloat(prompt("Digite a primeira nota entre 0 e 10: "));
notas.push(nota1);
const nota2 = parseFloat(prompt("Digite a segunda nota entre 0 e 10: "));
notas.push(nota2);
const nota3 = parseFloat(prompt("Digite a terceira nota entre 0 e 10: "));
notas.push(nota3);

const media = (nota1+nota2+nota3)/3.0;

let valiNotas;
if(nota1 < 0 || nota1 > 10 || 
nota2 < 0 || nota2 > 10 ||
nota3 < 0 || nota3 > 10) {
    valiNotas = true;
}else{
    valiNotas = false;
}

if (valiNotas || notas.lenght < 3 || isNaN(media)) {
    console.log("São necessárias 3 notas entre 0 e 10. Por favor, inicie novamente.");
}else if(media < 5) {
    console.log("Sua média final foi " + media.toFixed(2) + ". Infelizmente você está reprovado.");
}else {
    console.log("Sua média final foi " + media.toFixed(2) + ". Parabéns, você está aprovado.")
}