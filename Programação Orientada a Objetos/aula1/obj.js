const pessoa1 = {nome: "Cris", idade: 25}

const quadrado = {
    base: 10,
    altura: 10,
    calcularArea: function() {return this.base * this.altura}
}

const agenda = {
    contatos: [
        {nome: "contato1", telefone: "111111", email: 'contato@asas.com'},
        {nome: "contato2", telefone: "111111", email: 'contato@asas.com'},
        {nome: "contato3", telefone: "111111", email: 'contato@asas.com'},
        {nome: "contato4", telefone: "111111", email: 'contato@asas.com'},
        {nome: "contato5", telefone: "111111", email: 'contato@asas.com'}
    ],
    adicionar: function(contato) { this.contatos.push(contato)}
}
