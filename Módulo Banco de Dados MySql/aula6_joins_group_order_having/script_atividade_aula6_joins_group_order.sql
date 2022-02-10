-- Vendedor que mais realizou atendimentos a clientes de pedidos de compras e valor total

select l.id, f.nome, f.cpf, SUM(pc.valor), count(l.id)
from funcionarios f
	join logistas l on l.Funcionario = f.id
	join pedidoscompras pc on pc.Logista = l.id
group by l.id
order by count(l.id) desc
limit 1;

-- Qual foi fornecedor que atendeu mais requisições e a quantidade

select f.id, f.nome, SUM(Quantidade), COUNT(f.id)
from fornecedores f
	join requisitcoes r on r.Fornecedor = f.id
group by f.id
order by count(f.id) desc
limit 1;