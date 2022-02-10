-- Views

CREATE OR REPLACE VIEW ListarFuncionarios AS
SELECT Nome
FROM funcionarios;

SELECT * FROM ListarFuncionarios;

-- Listagem de todos os clientes e quantidade de pedidos de manutenção realizado por eles

CREATE OR REPLACE VIEW ListaClientesQtdePedidosRealizado AS
SELECT DISTINCT pm.cliente, c.Nome, COUNT(pm.cliente) AS 'Qtde de Pedidos'
FROM Clientes c
	LEFT JOIN pedidosmanutencoes pm ON pm.Cliente = c.Id 
GROUP BY c.id;

SELECT * FROM ListaClientesQtdePedidosRealizado;