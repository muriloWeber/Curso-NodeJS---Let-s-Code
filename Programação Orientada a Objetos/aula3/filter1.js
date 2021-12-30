/*
Dado um vetor de strings, filtre os elementos do vetor para conter apenas strings com 5 caractéres ou menos.
*/

const strings = ["Beltessazar", "José", "Adão", "Ana", "Tomé"];

const byStrings = x => x.length <= 5;

const strings5 = strings.filter(byStrings);

console.log(strings5);