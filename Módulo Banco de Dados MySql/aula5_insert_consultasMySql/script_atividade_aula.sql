select SUM(Valor) from pedidosManutencoes;

select AVG(Valor) from pedidosManutencoes;

select SUM(Valor) from pedidoscompras;

select AVG(Valor) from pedidoscompras;

select MIN(Valor) from pedidoscompras;
select MAX(Valor) from pedidoscompras;

select
	MAX(Valor) as 'Valor Máximo',
    MIN(Valor) as 'Valor mínimo'
from pedidosManutencoes;

select * from clientes where telefone like '(96)%';
select COUNT(*) from clientes where telefone like '(96)%';

select * from clientes where telefone like '%3';

select * from funcionarios where Id in (select Funcionario from tecnicos where cnh is null);
select * from funcionarios where Id in (select Funcionario from tecnicos where cnh is not null);

select * from suporteonline;
select COUNT(*) from suporteonline where data between "2021-03-01" and "2021-03-31";
select COUNT(*) from suporteonline where month(data) = 3; -- outra opção de resposta

select * from clientes where Id in (select cliente from pedidosmanutencoes);
select * from clientes where Id not in (select cliente from pedidosmanutencoes);

select * from clientes where Id in (select cliente from pedidoscompras);
select * from clientes where Id not in (select cliente from pedidoscompras);

select * from funcionarios where Id in (select atendenteonline from suporteonline);

