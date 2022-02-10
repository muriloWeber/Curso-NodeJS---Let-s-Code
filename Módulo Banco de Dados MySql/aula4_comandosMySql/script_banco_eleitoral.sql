CREATE DATABASE Eleitoral
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Eleitoral;

CREATE TABLE Eleitores (
	Id INT NOT NULL AUTO_INCREMENT,
    Nome VARCHAR(150) NOT NULL,
    NumeroEleitoral CHAR(15) NOT NULL UNIQUE,
    NomeMae VARCHAR(150),
    DataNascimento DATE NOT NULL,
    Votou BOOLEAN,
    Justificou BOOLEAN,
    
    CONSTRAINT PK_Eleitores PRIMARY KEY (Id)
);

CREATE TABLE PartidosPolitico (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(50) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    
    CONSTRAINT PK_PartidosPolitico PRIMARY KEY (Id)
);

CREATE TABLE CargosDisputados (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Codigo VARCHAR(50) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    
    CONSTRAINT PK_CargosDisputados PRIMARY KEY (Id)
);

CREATE TABLE Candidatos (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(255) NOT NULL,
    Numero CHAR(15) NOT NULL,
    
    PartidoPolitico INT NOT NULL,
    CargoDisputado INT NOT NULL,
    
    CONSTRAINT PK_Candidatos PRIMARY KEY (Id),
    CONSTRAINT FK_Candidatos_PartidoPolitico FOREIGN KEY (PartidoPolitico) REFERENCES PartidosPolitico (Id),
    CONSTRAINT FK_Candidatos_CargoDisputado FOREIGN KEY (CargoDisputado) REFERENCES CargosDisputados (Id)
);

CREATE TABLE Votos (
	NumeroCandidato CHAR(15) NOT NULL
);