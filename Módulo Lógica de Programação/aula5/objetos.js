// const nomes = ["contato1", "contato2", "contato3"];
// const telefones = ["11-1111-1111", "22-2222-2222", "33-3333-3333"];

// for (let i = 0; i < nomes.length; i++) {
//   console.log(`${nomes[i]}: ${telefones[i]}`);
// }

// const agenda = [
//   ["contato1", "000000", "endeço xpto", "tipo do sangue"],
//   ["contato2", "111111", null, null],
//   ["contato3", "222222"],
// ];

// for (contato of agenda) {
//   console.log(contato[0], contato[3]);
// }

// console.log(agenda[0]);

// const obj = {
//   nome: "Cristian",
//   idade: 25,
//   sangue: "0-",
//   tech: true,
//   "é": "legal",
// };

// const agenda = [
//   { nome: "Contato1", telefone: "11-1111-1111", endereco: "Endereço xpto" },
//   { nome: "Contato2", telefone: "22222222" },
//   { nome: "Contato3", telefone: "33333333" },
// ];

// for (contato of agenda) {
//   console.log(contato.nome, contato.telefone, contato.endereco || "");
// }

// contato.endereco ? contato.endereco : "";

const criarContato = (nome, telefone, endereco) => ({
  nome: nome,
  telefone: telefone,
  endereco: endereco || "",
});

// const nome = "Cristian";
// const aluno = {nome: nome}

// const aluno = {nome}

// const criarContato = (nome, telefone, endereco = "") => ({
//   nome,
//   telefone,
//   endereco: endereco || "",
// });

const criarContato = (nome, telefone, endereco = "") => ({
  nome,
  telefone,
  endereco,
});

const contato1 = criarContato("Contato1", "11-1111-1111", "Endereço xpto");

console.log(contato1);
