-- Listagem dos Clientes e quantidade de pedidos de compras

SELECT c.id, c.nome, COUNT(pc.Cliente) as "Qtde de Pedidos"
FROM clientes c
	left join pedidoscompras pc on pc.Cliente = c.id
GROUP BY c.id
ORDER BY COUNT(pc.Cliente) desc;

-- Crie uma view que retorne o vendedor que mais realizou atendimentos a clientes de manutenção e 
-- valor total

CREATE OR REPLACE VIEW VendedorMaisAtendimentosManutencaoValorTotal AS
SELECT f.id, f.nome, SUM(pm.Valor) AS "Soma Total", COUNT(f.id) as "Qtde Atendimentos"
FROM funcionarios f
	join logistas l on l.Funcionario = f.id
    join pedidosmanutencoes pm on pm.Logista = l.id
GROUP BY f.nome
ORDER BY COUNT(f.id) desc
LIMIT 1;

-- Listagem do gerente de cada departamento

SELECT DISTINCT g.id, g.nome, g.cpf 
FROM funcionarios f
	JOIN funcionarios g on g.id = f.gerente;

-- Crie uma procedure que me permita realizar um filtro de nome no estoquista que atendeu 
-- mais solicitações
DELIMITER //

CREATE PROCEDURE EstoquistaComMaisSolicitacoes (
	nome VARCHAR(250)
)
BEGIN
	SELECT f.id, f.nome, COUNT(se.estoquista) AS "Número de Atendimentos"
	FROM funcionarios f
		JOIN estoquistas e ON e.Funcionario = f.id
        JOIN solicitacoesestoque se ON se.Estoquista = f.id
	WHERE (nome is null or f.nome like CONCAT("%", nome, "%"));
END //

DELIMITER ;

CALL EstoquistaComMaisSolicitacoes ("Tabanez");

-- Qual foi o produto mais solicitado estoquistas e sua quantidade

SELECT f.id, f.nome, se.produto, SUM(se.quantidade) AS "Qtde Total Solicitada", COUNT(se.produto) AS "Qtde de Solicitações do Produto"
FROM funcionarios f
	JOIN estoquistas e ON e.Funcionario = f.id
	JOIN solicitacoesestoque se ON se.Estoquista = f.id
GROUP BY se.produto
ORDER BY COUNT(se.produto) DESC;

-- Tecnico que solicitou mais produtos

SELECT f.id, f.nome, SUM(se.quantidade), COUNT(se.tecnico)
FROM funcionarios f
	JOIN tecnicos t ON t.Funcionario = f.id
    JOIN solicitacoesestoque se ON se.Tecnico = f.id
GROUP BY f.nome
ORDER BY COUNT(se.tecnico) DESC
LIMIT 1;

-- Tecnicos que atenderam mais ordem de serviços

-- Logista que realizaou o maior número de atendimentos
SELECT u.id, u.nome, SUM(u.pmCount + u.pcCount)
FROM (
SELECT l.id, f.nome, count(pm.logista) as "pmCount", "pcCount"
FROM funcionarios f
	JOIN logistas l ON l.funcionario = f.id
    JOIN pedidosmanutencoes pm ON pm.Logista = l.id
GROUP BY l.id

UNION

SELECT l.id, f.nome, "pmCount", count(pc.logista) as "pcCount"
FROM funcionarios f
	JOIN logistas l ON l.funcionario = f.id
    JOIN pedidoscompras pc ON pc.Logista = l.id
GROUP BY l.id
) AS u
GROUP BY u.id, u.nome
ORDER BY SUM(u.pmCount + u.pcCount) DESC
LIMIT 1;