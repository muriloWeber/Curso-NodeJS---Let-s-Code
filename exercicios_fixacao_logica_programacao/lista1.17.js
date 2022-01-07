/*
Alguns países medem temperaturas em graus Celsius, e outros em graus Fahrenheit. 
Faça um algoritmo para ler uma temperatura Celsius e imprimi-Ia em Fahrenheit (pesquise como fazer este tipo de conversão).
*/

function conversorCelsiusFahrenheit (temperaturaCelsius) {
    let fahrenheit = temperaturaCelsius * 1.8 + 32;
    return fahrenheit
}

console.log(conversorCelsiusFahrenheit(32));