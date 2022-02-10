CREATE DATABASE ERP
DEFAULT CHARACTER SET utf8 
DEFAULT COLLATE utf8_general_ci;

USE ERP;

CREATE TABLE Clientes (
  Id INT NOT NULL AUTO_INCREMENT,
  
  Nome VARCHAR(255) NOT NULL,
  CPF CHAR(14) NOT NULL,
  Telefone CHAR(15),

  CONSTRAINT PK_Clientes PRIMARY KEY (Id)
);

CREATE TABLE Funcionarios (
  Id INT NOT NULL AUTO_INCREMENT,

  Nome VARCHAR(255) NOT NULL,
  CPF CHAR(14) NOT NULL,
  CTPS CHAR(14) NOT NULL,

  Gerente INT,

  CONSTRAINT PK_Funcionarios PRIMARY KEY (Id),
  CONSTRAINT FK_Funcionarios_Gerente FOREIGN KEY (Gerente) REFERENCES Funcionarios(Id)
);

CREATE TABLE Logistas (
  Id INT NOT NULL,

  Funcionario INT NOT NULL,

  CONSTRAINT PK_Logistas PRIMARY KEY (Id),
  CONSTRAINT FK_Logistas_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Tecnicos (
  Id INT NOT NULL,
  CNH CHAR(11),

  Funcionario INT NOT NULL,

  CONSTRAINT PK_Tecnicos PRIMARY KEY (Id),
  CONSTRAINT FK_Tecnicos_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Fornecedores (
  Id INT NOT NULL AUTO_INCREMENT,
  Nome VARCHAR(255) NOT NULL,

  CONSTRAINT PK_Fornecedores PRIMARY KEY (Id)
);

CREATE TABLE AtendentesOnline (
  Id INT NOT NULL,

  Funcionario INT NOT NULL,

  CONSTRAINT PK_AtendentesOnline PRIMARY KEY (Id),
  CONSTRAINT FK_AtendentesOnline_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE Estoquistas (
  Id INT NOT NULL,

  Funcionario INT NOT NULL,

  CONSTRAINT PK_Estoquistas PRIMARY KEY (Id),
  CONSTRAINT FK_Estoquistas_Funcionario FOREIGN KEY (Funcionario) REFERENCES Funcionarios(Id)
);

CREATE TABLE PedidosManutencoes (
  Id INT NOT NULL AUTO_INCREMENT,
  
  Descricao VARCHAR(500) NOT NULL,
  Valor DECIMAL(8, 2),

  Logista INT NOT NULL,
  Cliente INT NOT NULL,

  CONSTRAINT PK_PedidosManutencoes PRIMARY KEY (Id),
  CONSTRAINT FK_PedidosManutencoes_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id),
  CONSTRAINT FK_PedidosManutencoes_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id)
);

CREATE TABLE PedidosCompras (
  Id INT NOT NULL AUTO_INCREMENT,
  
  Produto VARCHAR(500) NOT NULL,
  Valor DECIMAL(8, 2),
  Desconto DECIMAL(4,2),

  Logista INT NOT NULL,
  Cliente INT NOT NULL,

  CONSTRAINT PK_PedidosCompras PRIMARY KEY (Id),
  CONSTRAINT FK_PedidosCompras_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id),
  CONSTRAINT FK_PedidosCompras_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id)
);

CREATE TABLE SuporteOnline (
  Id INT NOT NULL AUTO_INCREMENT,
  
  Descricao VARCHAR(500) NOT NULL,
  Data DATETIME NOT NULL,
  Tipo VARCHAR(100) NOT NULL,

  AtendenteOnline INT NOT NULL,
  Cliente INT NOT NULL,

  CONSTRAINT PK_SuporteOnline PRIMARY KEY (Id),
  CONSTRAINT FK_SuporteOnline_AtendenteOnline FOREIGN KEY (AtendenteOnline) REFERENCES AtendentesOnline(Id),
  CONSTRAINT FK_SuporteOnline_Cliente FOREIGN KEY (Cliente) REFERENCES Clientes(Id)
);

CREATE TABLE OrdemServicos (
  Id INT NOT NULL AUTO_INCREMENT,
  
  Valor DECIMAL(8,2),
  Descricao VARCHAR(500) NOT NULL,
  Tempo DATETIME,

  Tecnico INT NOT NULL,
  Logista INT NOT NULL,

  CONSTRAINT PK_OrdemServicos PRIMARY KEY (Id),
  CONSTRAINT FK_OrdemServicos_Tecnico FOREIGN KEY (Tecnico) REFERENCES Tecnicos(Id),
  CONSTRAINT FK_OrdemServicos_Logista FOREIGN KEY (Logista) REFERENCES Logistas(Id)
);

CREATE TABLE SolicitacoesEstoque (
  Id INT NOT NULL AUTO_INCREMENT,

  Descricao VARCHAR(500) NOT NULL,
  Produto VARCHAR(500) NOT NULL,
  Quantidade INT NOT NULL,

  Tecnico INT NOT NULL,
  Estoquista INT NOT NULL,

  CONSTRAINT PK_SolicitacoesEstoque PRIMARY KEY (Id),
  CONSTRAINT FK_SolicitacoesEstoque_Tecnico FOREIGN KEY (Tecnico) REFERENCES Tecnicos(Id),
  CONSTRAINT FK_SolicitacoesEstoque_Estoquista FOREIGN KEY (Estoquista) REFERENCES Estoquistas(Id)
);

CREATE TABLE Requisitcoes (
  Id INT NOT NULL AUTO_INCREMENT,

  Produto VARCHAR(500) NOT NULL,
  Quantidade INT NOT NULL,

  Fornecedor INT NOT NULL,
  Estoquista INT NOT NULL,

  CONSTRAINT PK_Requisitcoes PRIMARY KEY (Id),
  CONSTRAINT FK_Requisitcoes_Fornecedor FOREIGN KEY (Fornecedor) REFERENCES Fornecedores(Id),
  CONSTRAINT FK_Requisitcoes_Estoquista FOREIGN KEY (Estoquista) REFERENCES Estoquistas(Id)
);



