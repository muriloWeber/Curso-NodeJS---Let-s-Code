const prompt = require("prompt-sync")({ sigint: true });

function randomIntFromInterval(min, max){
    return Math.floor(Math.random()*(max-min+1) + min);
}

const numero = randomIntFromInterval(1, 10);
let apostaUsuario = parseInt(prompt("Digite um número entre 1 e 10: "));

do {

}while(false)

while(apostaUsuario !== numero){
    apostaUsuario = parseInt(prompt("Tente novamente: "));
}
console.log("Parabéns! Você acertou!");