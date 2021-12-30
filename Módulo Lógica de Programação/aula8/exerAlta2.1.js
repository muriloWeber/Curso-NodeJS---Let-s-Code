/*
Crie um Sistema de Recursos Humanos onde podemos adicionar colaboradores com as seguintes características:

Id(Deve ser único);
Nome;
Idade;
Cargo;
Salário;
Data de admissão(Utilize input do tipo 'date' para facilitar);
O sistema deve ter as seguintes ações:

Adicionar colaborador(Sempre limpar inputs após adicionar);
Remover colaborador;
Busca em tempo real(a cada tecla que colocamos no input) e avançada por id/nome/cargo;
Obs: Sempre atualizar a lista com cada ação que é disparada seja adiconar, remover, etc...
Exiba em alguma lugar na tela as seguintes informações:

Total de colaboradores;
Qual o custo mensal pagando todos esses colaboradores(Soma de todos os salários);
A média da idade dos colaboradores;
A média dos salários dos colaboradores;
Obs: Utilize funções de alta ordem para realizar os cálculos.
*/

const prompt = require("prompt-sync")({ sigint: true });

const createColaborador = (id, nome, idade, cargo, salario, dataDeAdmissao) => ({
    id,
    nome,
    idade,
    cargo,
    salario,
    dataDeAdmissao
})

let colaboradores = [];
let id = 0;
let nome;
let idade;
let cargo;
let salario;
let dataAdmissao;
let totalCusto;
let mediaIdade;
let mediaSalarios;

function getTotalSal(total, item) {
    return total + item.salario
}

function getTotalIdade(total, item) {
    return total + item.idade
}

const byName = nome => colaboradores => colaboradores.nome === nome;

let end = false;

do {
    const userOption = parseInt(prompt(`Digite o número desejado entre as opções:\n1 - Adicionar Colaborador
2 - Remover Colaborador\n3 - Buscar Colaborador\n4 - Editar Cadastro\n5 - Sair do Programa\n`));
    if (userOption === 5){
        end = true;
    } else if (userOption === 1) {
        id += 1;
        nome = prompt("Nome completo: ");
        idade = parseInt((prompt("Idade: ")));
        cargo = prompt("Cargo: ");
        salario = parseFloat(prompt("Salário: "));
        dataAdmissao = (prompt("Data de admissão: "));
        colaboradores.push(createColaborador(id, nome, idade, cargo, salario, dataAdmissao));
        totalCusto = colaboradores.reduce(getTotalSal, 0);
        mediaIdade = colaboradores.reduce(getTotalIdade, 0) / colaboradores.length;
        mediaSalarios = colaboradores.reduce(getTotalSal, 0) / colaboradores.length;
        console.log(`Total de colaboradores cadastrados: ${colaboradores.length}`);
        console.log(`O custo total com salários é R$ de ${totalCusto.toFixed(2)}`);
        console.log(`A média de idade dos colaboradores é de ${mediaIdade} anos`);
        console.log(`A média de salário dos colaboradores é de R$ ${mediaSalarios.toFixed(2)}`);
    } else if (userOption === 2) {
        let remove = prompt("Digite o nome do colaborador que deseja remover: ");
        colaboradores.splice(colaboradores.findIndex(byName(remove)), 1);
        totalCusto = colaboradores.reduce(getTotalSal, 0);
        mediaIdade = colaboradores.reduce(getTotalIdade, 0) / colaboradores.length;
        mediaSalarios = colaboradores.reduce(getTotalSal, 0) / colaboradores.length;
        console.log(`Total de colaboradores cadastrados: ${colaboradores.length}`);
        console.log(`O custo total com salários é R$ de ${totalCusto.toFixed(2)}`);
        console.log(`A média de idade dos colaboradores é de ${mediaIdade} anos`);
        console.log(`A média de salário dos colaboradores é de R$ ${mediaSalarios.toFixed(2)}`);     
    } else if (userOption === 3) {
        let busca = prompt("Digite o nome do colaborador que deseja buscar: ");
        console.log(colaboradores.find(byName(busca)));
    } else if (userOption === 4) {
        let editar = prompt("Digite o nome do colaborador que deseja editar: ");
        let indice = colaboradores.findIndex(byName(editar));
        nome = prompt("Nome completo: ");
        idade = parseInt((prompt("Idade: ")));
        cargo = prompt("Cargo: ");
        salario = parseFloat(prompt("Salário: "));
        dataAdmissao = (prompt("Data de admissão: "));
        colaboradores[indice] = createColaborador(colaboradores[indice].id, nome, idade, cargo, salario, dataAdmissao);
        totalCusto = colaboradores.reduce(getTotalSal, 0);
        mediaIdade = colaboradores.reduce(getTotalIdade, 0) / colaboradores.length;
        mediaSalarios = colaboradores.reduce(getTotalSal, 0) / colaboradores.length;
        console.log(`Total de colaboradores cadastrados: ${colaboradores.length}`);
        console.log(`O custo total com salários é R$ de ${totalCusto.toFixed(2)}`);
        console.log(`A média de idade dos colaboradores é de ${mediaIdade} anos`);
        console.log(`A média de salário dos colaboradores é de R$ ${mediaSalarios.toFixed(2)}`);
    } else {
        console.log("Opção inválida. Tente novamente.")
    }
} while (!end);
