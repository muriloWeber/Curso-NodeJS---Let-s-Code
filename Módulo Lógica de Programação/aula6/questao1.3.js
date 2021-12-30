/**
Crie um objeto chamado cachorro através de uma função construtora. As propriedades desse objeto devem ser nome, apelido, raça, 
idade e isVacinado. Ofereça um valor padrão para chaves inexistentes.
*/

const createCachorro = (nome, apelido, raca, idade, isVacinado) => ({
    nome,
    apelido,
    raca,
    idade,
    isVacinado
});

const cachorro = createCachorro("Java", "Cusco", "Pitbull", "3 meses", "sim");

console.log(cachorro);