/**
Considere o seguinte objeto abaixo:

Mostre no console a seguinte mensagem usando algum método de acesso ao objeto: 
"John Doe tem 30 anos de idade, é pardo, natural de Recife-PE e de nacionalidade brasileira."
*/

const pessoa = {
    primeiroNome: "John",
    segundoNome: "Doe",
    idade: 30,
    etnia: "pardo",
    naturalidade: "Recife-PE",
    nacionalidade: "brasileira"
};

console.log(pessoa.primeiroNome + " " + pessoa.segundoNome + " tem " + pessoa.idade + " anos de idade, é " + pessoa.etnia + 
", \nnatural de " + pessoa.naturalidade + " e de nacionalidade " + pessoa.nacionalidade);