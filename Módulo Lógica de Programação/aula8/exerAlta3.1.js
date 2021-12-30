/*
Uitilize o código que foi disponibilizado na aula e siga as regras de negócio da lista de exercícios.

Considere que o objeto do aluno contém as seguintes características:

Id (Único)(Number)
Nome(String)
Idade(Number)
Exercicios Adaptados(Boolean)
Professor Responsável(String)
Tem Acesso(Boolean)(Para bloquear entrada caso necessário)
Valor Mensalidade(Number)
No sistema de acadêmia, adicione as seguintes funcionalidades:

Adicionar aluno;
Remover aluno;
Ao adicionar aluno, verifique se ele precisa ter exercícios adaptados(Se idade maior que 60) e coloque true ou false para essa propriedade no objeto;
O aluno sempre terá um professor responsável, exiba em um select a lista de professores que podem ser selecionados como responsáveis e grave a informação no objeto.
*/

const prompt = require("prompt-sync")({ sigint: true });

const createAluno = (id, nome, idade, exerciciosAdpt, profResp, temAcess, valorMensal) => ({
    id,
    nome,
    idade,
    exerciciosAdpt,
    profResp,
    temAcess,
    valorMensal
})

let professores = ["Max", "Tina", "Sara"];
let alunos = [];
let id = 0;
let nome;
let idade;
let exerciciosAdpt;
let profResp;
let temAcess;
let valorMensal;
let mediaIdade;
let totalMensal;
let mediaMensal;

function getTotalMensal(total, item) {
    return total + item.valorMensal
}

function getTotalIdade(total, item) {
    return total + item.idade
}

const byName = nome => alunos => alunos.nome === nome;
const byId = id => alunos => alunos.id === id;

let end = false;

do {
    const userOption = parseInt(prompt(`Digite o número desejado entre as opções:\n1 - Adicionar Aluno
2 - Remover Aluno\n3 - Indicadores\n4 - Remover/Permitir Acesso\n5 - Buscar Aluno\n6 - Sair do Programa\n`));
    if (userOption === 6){
        end = true;
    } else if (userOption === 1) {
        id += 1;
        nome = prompt("Nome completo: ");
        idade = parseInt((prompt("Idade: ")));
        exerciciosAdpt = (idade > 60) ? true : false;
        let profRespSel = parseInt(prompt(`Digite a opção do professor responsável:\n1 - Max
2 - Tina\n3 - Sara\n`));
        profResp = professores[profRespSel - 1]
        let temAcessSel = parseInt(prompt(`Aluno tem acesso?\n0 - Não\n1- Sim\n`));
        temAcess = temAcessSel ? true : false;
        valorMensal = parseFloat(prompt("Digite o valor da mensalidade: "))
        alunos.push(createAluno(id, nome, idade, exerciciosAdpt, profResp, temAcess, valorMensal));
    } else if (userOption === 2) {
        let remove = prompt("Digite o nome do aluno que deseja remover: ");
        alunos.splice(alunos.findIndex(byName(remove)), 1);
    } else if (userOption === 3) {
        mediaIdade = alunos.reduce(getTotalIdade, 0) / alunos.length;
        totalMensal = alunos.reduce(getTotalMensal, 0);
        mediaMensal = alunos.reduce(getTotalMensal, 0) / alunos.length;
        console.log(`Total de alunos cadastrados: ${alunos.length}`);
        console.log(`A média de idade dos alunos é de ${mediaIdade} anos`);
        console.log(`O total de mensalidades é de R$ ${totalMensal.toFixed(2)}`);        
        console.log(`A média de mensalidades é de R$ ${mediaMensal.toFixed(2)}`);
    } else if (userOption === 4) {
        let editarAcesso = prompt("Digite o nome do aluno que deseja remover/permitir acesso: ");
        let indice = alunos.findIndex(byName(editarAcesso));
        let choice = parseInt(prompt(`Digite a ação que deseja executar:\n1 - Permitir\n2 - Remover\n`));
        switch (choice) {
            case 1: 
                alunos[indice].temAcess = true;
                break;
            case 2: 
                alunos[indice].temAcess = false;
                break;
        }
    } else if (userOption === 5) {
        let buscar = parseInt(prompt(`Digite a ação que deseja executar:\n1 - Busca por ID\n2 - Busca por Nome\n3 - Filtrar Professor
4 - Filtrar Idade\n`));
        let choice;
        switch (buscar) {
            case 1:
                let id = parseInt(prompt("Digite o ID que deseja buscar: "));
                console.log(alunos.find(byId(id)));
                break;
            case 2: 
                let name = prompt("Digite o Nome que deseja buscar: ");
                console.log(alunos.find(byName(name)));
                break;
            case 3:
                let professor = prompt("Digite o nome do professor que deseja filtrar: ");
                const byFilterProfessor = x => x.profResp === professor;
                console.log(alunos.filter(byFilterProfessor));
                break;
            case 4:
                let idade1 = parseInt(prompt("Digite a idade que deseja filtrar: "));
                const byFilterAge = x => x.idade === idade1;
                console.log(alunos.filter(byFilterAge));
        }
    } else {
        console.log("Opção inválida. Tente novamente.")
    }
} while (!end);