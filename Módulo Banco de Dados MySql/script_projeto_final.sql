CREATE DATABASE sistema_estoque
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE sistema_estoque;

CREATE TABLE Categorias (
	id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(150),
    ativa CHAR (3) NOT NULL,
    
    CONSTRAINT PK_Categorias PRIMARY KEY (id)
);
    
INSERT INTO Categorias (nome, ativa)
VALUES ("Informática", "[v]"),
("Telefonia", "[v]"),
("Games", "[v]"),
("Tv, Áudio e Vídeo", "[v]"),
("Impressão e Imagem", "[v]");

CREATE TABLE Produtos (
	id INT NOT NULL AUTO_INCREMENT,
    id_categoria INT NOT NULL,
    descricao VARCHAR (150) NOT NULL,
    preco DECIMAL (8,2) NOT NULL,
    url_imagem VARCHAR(255),
    
    CONSTRAINT PK_Produtos PRIMARY KEY (id),
    CONSTRAINT FK_Produtos_Categorias FOREIGN KEY (id_categoria) REFERENCES Categorias (id)
    
);

INSERT INTO Produtos (id_categoria, descricao, preco)
VALUES (1, "SSD 128GB", 300),
(1, "SSD 256GB", 500),
(1, "KIT TECLADO E MOUSE", 600),
(3, "PLAYSTATION 3", 1500),
(2, "SAMSUNG A51", 2500),
(4, "TELEVISÃO LG 55""", 3000),
(3, "PLAYSTATION 3 1TB", 1500),
(2, "SAMSUNG S9", 2500),
(2, "IPHONE 8", 2500),
(2, "IPHONE 9", 3000),
(2, "IPHONE X", 4000),
(4, "TELEVISÃO SAMSUNG 32""", 1000),
(4, "TELEVISÃO SAMSUNG 48""", 3000),
(3, "PLAYSTATION 4 1TB", 2800),
(3, "PLAYSTATION 5 1TB", 5000),
(1, "Teclado Gamer Razer", 250),
(1, "Fone de ouvido hyperx", 170),
(1, "Mouse Gamer Razer", 90),
(1, "Mouse Gamer Razer 2400", 200);

INSERT INTO Produtos (descricao, preco)
VALUES ("Mouse Gamer", 280),
("Teclado Gamer", 390);

ALTER TABLE Produtos MODIFY id_categoria INT;

-- 1) Crie uma query que traga só os produtos que tem categorias.

SELECT * 
FROM produtos p
	JOIN categorias c ON p.id_categoria = c.id
ORDER BY p.id;

-- 2) Crie uma query que traga todos os produtos, mesmo que não tenha categoria.

SELECT * 
FROM produtos p
	LEFT JOIN categorias c ON p.id_categoria = c.id
ORDER BY p.id;

-- 3) Crie uma query que traga todos os produtos que tem categorias, 
-- e também traga categorias que não tem produtos.

SELECT * 
FROM produtos p
	RIGHT JOIN categorias c ON p.id_categoria = c.id
ORDER BY p.id;

-- 4) Crie uma query que trás os produtos e categorias mesmo que não estejam interligados.

SELECT * 
FROM produtos p
	LEFT JOIN categorias c ON p.id_categoria = c.id
UNION
SELECT * 
FROM produtos p
	RIGHT JOIN categorias c ON p.id_categoria = c.id;
    
--  5) Crie uma query que traga todos os produtos da categoria Informática.

SELECT *
FROM categorias c
	 JOIN produtos p on p.id_categoria = c.id
WHERE p.id_categoria = 1;

-- 6) Crie uma query que traga todos os produtos da categoria Telefonia ordenado por descrição do produto

SELECT *
FROM categorias c
	 JOIN produtos p on p.id_categoria = c.id
WHERE p.id_categoria = 2
ORDER BY p.descricao;

-- 7) Crie uma query que traga todos os produtos da categoria Games.

SELECT *
FROM categorias c
	 JOIN produtos p on p.id_categoria = c.id
WHERE p.id_categoria = 3;

-- 8) Crie uma query que traga todos os produtos da categoria Tv, Áudio e Vídeo.

SELECT *
FROM categorias c
	 JOIN produtos p on p.id_categoria = c.id
WHERE p.id_categoria = 4;

-- 9) Crie uma query que traga todos os produtos de todas as categorias ordenado pelo id da categoria.

SELECT *
FROM categorias c
	 JOIN produtos p on p.id_categoria = c.id
ORDER BY c.id;

-- 10) Crie uma query que traga todos os produtos que tenham categoria ordenados por descrição.

SELECT *
FROM produtos p
	JOIN categorias c ON p.id_categoria = c.id
ORDER BY p.descricao;

-- 11) Crie uma query que traga todos os produtos da categoria de informática que tenha preço menor 
-- que 400 ordenado por menor preço.

SELECT * 
FROM categorias c 
	JOIN produtos p ON p.id_categoria = c.id
WHERE p.preco < 400
ORDER BY p.preco;

-- 12) Crie uma query que traga todos os produtos da categoria de games que tenham preço 
-- entre 1600 e 3000 ordenado por maior preço.

SELECT * 
FROM categorias c 
	JOIN produtos p ON p.id_categoria = c.id
WHERE p.id_categoria = 3 AND p.preco BETWEEN 1600 AND 3000
ORDER BY p.preco DESC;

-- 13) Crie uma query que traga a quantidade de produtos por categoria, exibindo o nome da categoria.

SELECT c.id, c.nome, COUNT(p.id_categoria)
FROM categorias c
		JOIN produtos p ON p.id_categoria = c.id
GROUP BY c.nome;

-- 14) Crie uma query que traga a soma dos preços de produtos por categoria, exibindo o nome da 
-- categoria e ordene por preço.

SELECT c.id, c.nome, SUM(p.preco) AS soma_precos
FROM categorias c
		JOIN produtos p ON p.id_categoria = c.id
GROUP BY c.nome
ORDER BY soma_precos;

-- 15) Crie uma query que traga a média dos preços de produtos por categoria, exibindo o nome da 
-- categoria e ordene pelo maior preço.

SELECT c.id, c.nome, AVG(p.preco) AS avg_precos
FROM categorias c
		JOIN produtos p ON p.id_categoria = c.id
GROUP BY c.nome
ORDER BY avg_precos DESC;

-- 16) Crie uma query que traga o menor valor de produto por categoria, exibindo o nome da 
-- categoria, ordenado pela categoria.

SELECT c.id, c.nome, MIN(p.preco) AS menor_preco
FROM categorias c
		JOIN produtos p ON p.id_categoria = c.id
GROUP BY c.nome
ORDER BY c.nome;

-- 17) Crie uma query que traga o maior valor de produto por categoria, exibindo o nome da categoria, 
-- ordenado pela categoria.

SELECT c.id, c.nome, MAX(p.preco) AS maior_preco
FROM categorias c
		JOIN produtos p ON p.id_categoria = c.id
GROUP BY c.nome
ORDER BY c.nome;