-- INNER JOIN
-- Listagem de tecnicos que não possuem CNH

SELECT t.id, f.nome, f.cpf, f.CTPS 
FROM funcionarios f
	join tecnicos t on t.funcionario = f.id
where t.cnh is null;

-- Listar atendentes que já realizaram atendimento online a um cliente em novembro

select distinct ao.id, f.nome, f.cpf
from funcionarios f
	join atendentesonline ao on ao.Funcionario = f.id
    join suporteonline so on so.AtendenteOnline = ao.id
where month(so.data) = 11;

-- LEFT
select c.id, c.nome, c.cpf, pm.id, pm.Descricao, pm.Valor
from clientes c
left join pedidosmanutencoes pm on pm.Cliente = c.id;

-- RIGHT
select c.id, c.nome, c.cpf, pm.id, pm.Descricao, pm.Valor
from pedidosmanutencoes pm
right join clientes c on pm.Cliente = c.id;

-- FULL / UNION
select c.id, c.nome, c.cpf, pm.id, pm.Descricao, pm.Valor
from clientes c
left join pedidosmanutencoes pm on pm.Cliente = c.id

union

select c.id, c.nome, c.cpf, pm.id, pm.Descricao, pm.Valor
from pedidosmanutencoes pm
right join clientes c on pm.Cliente = c.id;

-- GROUP BY / ORDER BY

select ao.id, f.nome, f.cpf, count(ao.id)
from funcionarios f
join atendentesonline ao on ao.Funcionario = f.id
join suporteonline so on so.AtendenteOnline = ao.id
group by ao.id, f.nome, f.cpf
order by count(ao.id) desc; -- desc é o descendente

-- HAVING - TRABALHA COM AGREGAÇÕES

select ao.id, f.nome, f.cpf, count(ao.id)
from funcionarios f
join atendentesonline ao on ao.Funcionario = f.id
join suporteonline so on so.AtendenteOnline = ao.id
group by ao.id, f.nome, f.cpf
HAVING count(ao.id) > 3
order by count(ao.id) desc;

-- HACKZINHO que facilita a vida na migração de dados

INSERT INTO NovaTabela (nome)
SELECT Nome from Clientes;

-- HACKZINHO default pro not null

ALTER TABLE Clientes
ALTER Texto SET DEFAULT 0;