/*
Considere a matriz a seguir:

Essa matriz representa os dados de 4 alunos. Os dados são: nome, idade, linguagem de programação que está aprendendo e curso que está fazendo na Let's Code.

Mostre no console todos os dados da aluna Luciana.

Mostre no console a idade da aluna Letícia.

Modifique o curso do aluno Pedro de Mobile para Data Science.
*/

const alunos = [
    ["João", 30, "Python", "Data Science"],
    ["Letícia", 23, "Javascript", "Web Full Stack - Frontend"],
    ["Pedro", 40, "Java", "Mobile"],
    ["Luciana", 25, "C#", "Web Full Stack - Backend"]
]

console.log(alunos[3].join('\n'));

console.log(alunos[1][1]);

alunos[2][3] = "Data Science";

console.log(alunos.join("\n"));