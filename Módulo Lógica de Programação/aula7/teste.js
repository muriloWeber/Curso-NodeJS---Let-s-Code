let vetor1 = [1, 2, 3, 4, 5];
let funcao = (valor, indice, vetor) => vetor[vetor.length-indice-1];

let vetor2 = vetor1.map(funcao);
console.log(vetor2);