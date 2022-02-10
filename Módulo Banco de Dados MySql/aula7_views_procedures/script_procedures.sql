DROP PROCEDURE Teste; -- não tem como alterar procedure no MySql, tem que dropar e criar de novo

DELIMITER //

CREATE PROCEDURE Teste (
	Id INT,
    Nome varchar(250)
)
BEGIN
	select id, nome;
END //

DELIMITER ;

call Teste (1, "Oi");

-- Criar uma Procedure que liste os clientes com base em um filtro de id e nome
-- Tem que ter 2 parametros, id e nome

DELIMITER //

CREATE PROCEDURE ListaClientes (
	id INT,
    nome VARCHAR (250)
)
BEGIN
	SELECT c.Id, c.nome FROM clientes c
    WHERE 
		(id is null or c.Id = id)  
    and 
		(nome is null or c.nome like CONCAT("%", nome, "%"))
;
END //

DELIMITER ;

call ListaCliente (1, "Maciel");