/*
Ler um número inteiro (assuma até três dígitos) e imprimir a saída da seguinte forma:
CENTENA = x
DEZENA = x
UNIDADE = x
*/

const inteiro = 1;

function separador (inteiro) {
    let toString = inteiro.toString()
    if(toString.length === 3) {
    console.log(`CENTENA = ${toString[0]}
DEZENA = ${toString[1]}
UNIDADE = ${toString[2]}`)
    } else if (toString.length === 2) {
        console.log(`DEZENA = ${toString[0]}
UNIDADE = ${toString[1]}`)
    } else if(toString.length === 1) {
        console.log(`UNIDADE = ${toString[0]}`)
    }
}

separador(inteiro);