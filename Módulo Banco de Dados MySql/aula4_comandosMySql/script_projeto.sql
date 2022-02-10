CREATE DATABASE Projeto
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

USE Projeto;

CREATE TABLE Funcionarios (
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    CPF VARCHAR(14) NOT NULL,
    CTPS VARCHAR(10) NOT NULL,
    Gerente INT NOT NULL,
    
    CONSTRAINT PK_Funcionarios PRIMARY KEY (Id),
    CONSTRAINT FK_Funcionarios_Gerente FOREIGN KEY (Gerente) REFERENCES Funcionarios (Id)
);

ALTER TABLE Funcionarios MODIFY Gerente integer;

CREATE TABLE Logistas (
	Id INT NOT NULL AUTO_INCREMENT,
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Logistas PRIMARY KEY (Id),
    CONSTRAINT FK_Logistas_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
    );
    
    CREATE TABLE Tecnicos(
		Id INT NOT NULL AUTO_INCREMENT,
        
        CNH VARCHAR(15) NOT NULL,
        Funcionario INT NOT NULL,
        
        CONSTRAINT PK_Tecnicos PRIMARY KEY (Id),
        CONSTRAINT FK_Tecnicos_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
);

CREATE TABLE AtendentesOnline(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_AtendentesOnline PRIMARY KEY (Id),
    CONSTRAINT FK_AtendentesOnline_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
);

CREATE TABLE Estoquistas(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Funcionario INT NOT NULL,
    
    CONSTRAINT PK_Estoquistas PRIMARY KEY (Id),
    CONSTRAINT FK_Estoquistas_Funcionarios FOREIGN KEY (Funcionario) REFERENCES Funcionarios (Id)
);

CREATE TABLE Fornecedor(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Nome VARCHAR(150) NOT NULL,
    
    CONSTRAINT PK_Fornencedor PRIMARY KEY (Id)
);

CREATE TABLE Requisicoes(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Produto VARCHAR(150) NOT NULL,
    Quantidade INT NOT NULL,
    Estoquista INT NOT NULL,
    Fornecedor INT NOT NULL,
    
    CONSTRAINT PK_Requisicoes PRIMARY KEY (Id),
    CONSTRAINT FK_Requisicoes_Estoquistas FOREIGN KEY (Estoquista) REFERENCES Estoquistas (Id),
    CONSTRAINT FK_Requisicoes_Fornecedor FOREIGN KEY (Fornecedor) REFERENCES Fornecedor (Id)
);

CREATE TABLE SolicitacoesEstoque(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Descricao VARCHAR(255),
    Produto VARCHAR(150) NOT NULL,
    Quantidade INT NOT NULL,
    Tecnico INT NOT NULL,
    Estoquista INT NOT NULL,
    
    CONSTRAINT PK_SolicitacoesEstoque PRIMARY KEY (Id),
    CONSTRAINT FK_SolicitacoesEstoque_Tecnicos FOREIGN KEY (Tecnico) REFERENCES Tecnicos (Id),
    CONSTRAINT FK_SolicitacoesEstoque_Estoquistas FOREIGN KEY (Estoquista) REFERENCES Estoquistas (Id)
);

CREATE TABLE OrdemServicos(
	Id INT NOT NULL AUTO_INCREMENT,
    
    Valor DECIMAL(8,2) NOT NULL,
    Descricao VARCHAR(255) NOT NULL,
    Tempo VARCHAR(8) NOT NULL,
    Tecnico INT NOT NULL,
    Logista INT NOT NULL,

    CONSTRAINT PK_OrdemServicos PRIMARY KEY (Id),
    CONSTRAINT FK_OrdemServicos_Tecnico FOREIGN KEY (Tecnico) REFERENCES Tecnicos (Id),
    CONSTRAINT FK_OrdemServicos_Logistas FOREIGN KEY (Logista) REFERENCES Logistas (Id)
);

CREATE TABLE Clientes(
    Id INT NOT NULL AUTO_INCREMENT,

    Nome VARCHAR(150) NOT NULL,
    CPF VARCHAR(14) NOT NULL,
    Telefone CHAR(15) NOT NULL,

    CONSTRAINT PK_Clientes PRIMARY KEY (Id)
);

CREATE TABLE PedidosManutencoes(
    Id INT NOT NULL AUTO_INCREMENT,

    Descricao VARCHAR(255),
    Valor DECIMAL(8,2) NOT NULL,
    Logista INT NOT NULL,
    Cliente INT NOT NULL,

    CONSTRAINT PK_PedidosManutencoes PRIMARY KEY (Id),
    CONSTRAINT FK_PedidosManutencoes_Logistas FOREIGN KEY (Logista) REFERENCES Logistas (Id),
    CONSTRAINT FK_PedidosManutencoes_Clientes FOREIGN KEY (Cliente) REFERENCES Clientes (Id)
);

CREATE TABLE PedidosCompras(
    Id INT NOT NULL AUTO_INCREMENT,

    Produto VARCHAR(150) NOT NULL,
    Valor DECIMAL(8,2) NOT NULL,
    Desconto DECIMAL(8,2) NOT NULL,
    Logista INT NOT NULL,
    Cliente INT NOT NULL,

    CONSTRAINT PK_PedidosCompras PRIMARY KEY (Id),
    CONSTRAINT FK_PedidosCompras_Logistas FOREIGN KEY (Logista) REFERENCES Logistas (Id),
    CONSTRAINT FK_PedidosCompras_Clientes FOREIGN KEY (Cliente) REFERENCES Clientes (Id) 
);

CREATE TABLE SuporteOnline(
    Id INT NOT NULL AUTO_INCREMENT,

    Descricao VARCHAR(255),
    Data CHAR(8) NOT NULL,
    Tipo VARCHAR(150),
    AtendenteOnline INT NOT NULL,
    Cliente INT NOT NULL,

    CONSTRAINT PK_SuporteOnline PRIMARY KEY (Id),
    CONSTRAINT FK_SuporteOnline_AtendentesOnline FOREIGN KEY (AtendenteOnline) REFERENCES AtendentesOnline (Id),
    CONSTRAINT FK_SuporteOnline_Clientes FOREIGN KEY (Cliente) REFERENCES Clientes (Id)
);
