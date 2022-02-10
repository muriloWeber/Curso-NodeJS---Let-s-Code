delete from clientes where 1=1;

insert into funcionarios (nome, cpf, ctps)
values ("Murilo", "123.456.789-00", "841.62654.88-0");

select * from funcionarios;

insert into Logistas (Id, funcionario)
values (1, 1);

insert into funcionarios (nome, cpf, ctps)
values ("Caroline", "123.456.789-01", "841.62654.88-1");

insert into tecnicos (Id, Funcionario)
values (2, 2);

select uuid();

insert into clientes (nome, cpf, telefone)
values ("Rutyelle", "123.456.789-99", "841.62654.88-9");

insert into pedidosManutencoes (descricao, valor, logista, cliente)
value ("Manutenção note empresa", 149.99, 1, 55);

insert into funcionarios (nome, cpf, ctps)
values ("Caroline", "123.456.789-01", "841.62654.88-1");

insert into AtendentesOnLine (Id, Funcionario)
values (3, 3);

insert into SuporteOnline (descricao, data, tipo, atendenteonline, cliente)
values ("Site caiu", "2022-01-02 10:00:00", "Problemas no Site", 3, 55); 