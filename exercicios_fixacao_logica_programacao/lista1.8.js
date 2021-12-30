/*
Faça um algoritmo para ler três notas de um aluno em uma disciplina e imprimir a sua média ponderada (as notas tem pesos respectivos de 1, 2 e 3).
*/

const nota1 = 9;
const nota2 = 7;
const nota3 = 6;

function mediaPonderada (n1, n2, n3) {
    let pesos = (n1 + (n2*2) + (n3*3));
    let mediaP = pesos / 5;
    console.log(mediaP);
}

const primeiroBimestre = mediaPonderada (nota1, nota2, nota3);

