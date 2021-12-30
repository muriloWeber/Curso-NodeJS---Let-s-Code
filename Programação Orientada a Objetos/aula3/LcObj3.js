/*
Crie uma classe Funcionario cujos atributos são nome e e-mail. 
Guarde as horas trabalhadas em um dicionário cujas chaves são o mês em questão e, 
em outro dicionário, guarde o salário por hora relativo ao mês em questão. 
Crie um método que retorna o salário mensal do funcionário.
*/

class Funcionario {
    constructor (nome, email) {
        this.nome = nome;
        this.email = email;
        this.horasTrab = {};
        this.salarioHr = {};
    }

    calcularSalario (mes) {
        return (this.horasTrab[mes] * this.salarioHr[mes]).toFixed(2);
    }

    imprimirSalario (mes) {return console.log(JSON.stringify(`O salário no mês selecionado de ${this.nome} é de R$ ${mes}`))}
}

const func1 = new Funcionario("Murilo", "@gmail");

func1.horasTrab["jan"] = 168;
func1.horasTrab["fev"] = 140;
func1.salarioHr["jan"] = 10.53;
func1.salarioHr["fev"] = 10.34;


func1.imprimirSalario(func1.calcularSalario("jan"));