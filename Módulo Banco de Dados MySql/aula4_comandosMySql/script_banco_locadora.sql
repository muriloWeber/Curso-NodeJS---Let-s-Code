CREATE DATABASE Locadora
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Locadora;

CREATE TABLE Filmes (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Titulo VARCHAR(150) NOT NULL,
    Genero VARCHAR(150) NOT NULL,
    Estudio VARCHAR(150) NOT NULL,
    AnoProducao CHAR(4) NOT NULL,
    PaisOrigem VARCHAR(150) NOT NULL,
    Idioma VARCHAR(150) NOT NULL,
    Duracao CHAR(5),
    
    CONSTRAINT PK_Filmes PRIMARY KEY (Id)    
);

CREATE TABLE Atores (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    PaisNascimento VARCHAR(150) NOT NULL,
    DataNascimento CHAR(8) NOT NULL,
    
    CONSTRAINT PK_Atores PRIMARY KEY (Id)
);

CREATE TABLE FilmesAtores (
	Papel VARCHAR(150) NOT NULL,
    EhEstrela BOOLEAN NOT NULL,
    Ator INT NOT NULL,
    Filme INT NOT NULL,    
    
    CONSTRAINT FK_Atores FOREIGN KEY (Ator) REFERENCES Atores (Id),
    CONSTRAINT FK_Filmes FOREIGN KEY (Filme) REFERENCES Filmes (Id)
);

CREATE TABLE Fitas(
	Id INT NOT NULL AUTO_INCREMENT,
    
    DataCompra CHAR(8) NOT NULL,
    Filme INT NOT NULL,
    
    CONSTRAINT PK_Fitas PRIMARY KEY (Id),
    CONSTRAINT FK_Fitas_Filmes FOREIGN KEY (Filme) REFERENCES Filmes (Id)
);

CREATE TABLE Funcionarios (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    Matricula VARCHAR(150) NOT NULL UNIQUE,
    Endereco VARCHAR(250) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Salario VARCHAR(20) NOT NULL,
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id)
);

CREATE TABLE Administradores (
	Id INT NOT NULL AUTO_INCREMENT,
    Codigo CHAR(20) NOT NULL,
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Administradores PRIMARY KEY (Id),
    CONSTRAINT FK_Administradores_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
);

CREATE TABLE Atendentes (
	Id INT NOT NULL AUTO_INCREMENT,
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Atendentes PRIMARY KEY (Id),
    CONSTRAINT FK_Atendentes_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
);

CREATE TABLE Clientes (
	Id INT NOT NULL AUTO_INCREMENT,
    
    NumeroAssociado CHAR(20) NOT NULL UNIQUE,
    Nome VARCHAR(150) NOT NULL,
    Telefone CHAR(15) NOT NULL,
    Endereco VARCHAR(250) NOT NULL,
    
    CONSTRAINT PK_Clientes PRIMARY KEY (Id)
);

CREATE TABLE Alugueis (
	Id INT NOT NULL AUTO_INCREMENT,
    Atendente INT NOT NULL,
    Fita INT NOT NULL,
    Cliente INT NOT NULL,
    
    CONSTRAINT PK_Alugueis PRIMARY KEY (Id),
    CONSTRAINT FK_Alugueis_Atendentes FOREIGN KEY (Atendente) REFERENCES Atendentes (Id),
    CONSTRAINT FK_Alugueis_Fitas FOREIGN KEY (Fita) REFERENCES Fitas (Id),
    CONSTRAINT FK_Alugueis_Clientes FOREIGN KEY (Cliente) REFERENCES Clientes (Id)
);