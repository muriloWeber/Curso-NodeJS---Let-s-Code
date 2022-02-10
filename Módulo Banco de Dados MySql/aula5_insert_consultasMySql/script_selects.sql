INSERT INTO Clientes (Nome, CPF, Telefone)
VALUES ("Silvio Maciel Banha", "783.308.670-30", "(99) 99999-9999");

SELECT Nome FROM Clientes;

SELECT * FROM Clientes;

SELECT * FROM Clientes WHERE Id=1 OR nome = "Silvio Maciel Banha"
ORDER BY Nome DESC;

UPDATE Clientes SET Nome = "Atualizado!"
WHERE Id=2;

DELETE FROM Clientes WHERE Id = 2;

SELECT * FROM Clientes limit 5; -- no SQL Server é TOP(5)

CREATE TABLE Numeros (
	numero INT NOT NULL
);

INSERT INTO Numeros (numero) values (1);
INSERT INTO Numeros (numero) values (2);
INSERT INTO Numeros (numero) values (3);
INSERT INTO Numeros (numero) values (4);

SELECT * FROM Numeros;

select MIN(numero) from numeros;
select MAX(numero) from numeros;

select COUNT(*) from numeros;
select AVG(numero) from numeros;
select SUM(numero) from numeros;

SELECT * FROM Clientes
WHERE Nome LIKE 'silvio%';

-- r%  
-- %r
-- _r%
-- r_%
-- r__%

select * from clientes
where id in (1, 2, 3, 4, 5);

select * from clientes
where id in (select id from clientes);

select * from numeros
where numero between 2 and 3;

