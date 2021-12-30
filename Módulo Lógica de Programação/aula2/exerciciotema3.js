/*
Faça um algoritmo para calcular a média final da disciplina 
de Programação, mostrar essa média final e também uma mensagem 
informando se o aluno foi aprovado (média >= 7) ou reprovado. 
Considere duas avaliações.
 */

let nota1 = 7.5;
let nota2 = 10;
let mediaProgram = (nota1 + nota2) / 2.0;

if(mediaProgram >= 7) {
    console.log("Sua média final foi " + mediaProgram + ". Você foi aprovado(a), parabéns!");
}else{
    console.log("Sua média final foi " + mediaProgram + ". Infelizmente você foi reprovado(a).");
}

