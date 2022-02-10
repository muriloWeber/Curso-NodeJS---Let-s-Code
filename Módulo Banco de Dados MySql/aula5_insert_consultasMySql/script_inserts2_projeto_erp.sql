-- INSERÇÕES

-- Logistas
INSERT INTO Funcionarios (Nome, CPF, CTPS) VALUES ("Vânia Cantanhede Veríssimo", "253.125.900-70", "841.62654.88-0");
INSERT INTO Logistas (Id, Funcionario) VALUES(1, 1);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Caetana Marmou Galindo", "937.288.880-01", "596.86881.44-3", 1);
INSERT INTO Logistas (Id, Funcionario) VALUES(2, 2);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Elisete Lameira Taborda", "924.233.040-05", "698.52390.17-0", 1);
INSERT INTO Logistas (Id, Funcionario) VALUES(3, 3);

-- Tecnicos
INSERT INTO Funcionarios (Nome, CPF, CTPS) VALUES ("Denzel Sá Rangel", "896.216.820-02", "510.40038.92-5");
INSERT INTO Tecnicos (Id, Funcionario) VALUES(4, 4);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Ryan Baía Souto", "534.116.330-34", "470.11500.08-1", 4);
INSERT INTO Tecnicos (Id, CNH, Funcionario) VALUES(5, '11097539767', 5);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Josiane Alcoforado Miguéis", "800.055.220-56", "493.39537.88-7", 4);
INSERT INTO Tecnicos (Id, CNH, Funcionario) VALUES(6, '17201963348', 6);

-- AtendentesOnline
INSERT INTO Funcionarios (Nome, CPF, CTPS) VALUES ("Brenda Miguéis Fialho", "445.346.510-66", "653.60453.12-5");
INSERT INTO AtendentesOnline (Id, Funcionario) VALUES(7, 7);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Alexa Sabrosa Galante", "483.901.390-06", "527.18126.31-1", 7);
INSERT INTO AtendentesOnline (Id, Funcionario) VALUES(8, 8);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Marta Canejo Velasco", "159.646.290-67", "746.91522.57-3", 7);
INSERT INTO AtendentesOnline (Id, Funcionario) VALUES(9, 9);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Andressa Vaz Farinha", "880.080.670-80", "310.13749.36-6", 7);
INSERT INTO AtendentesOnline (Id, Funcionario) VALUES(10, 10);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Carmo Zarco Cavadas", "109.257.000-45", "991.87621.79-8", 7);
INSERT INTO AtendentesOnline (Id, Funcionario) VALUES(11, 11);

-- Estoquistas
INSERT INTO Funcionarios (Nome, CPF, CTPS) VALUES ("Emílio Varela Tabanez", "875.500.510-11", "773.22054.75-1");
INSERT INTO Estoquistas (Id, Funcionario) VALUES(12, 12);
INSERT INTO Funcionarios (Nome, CPF, CTPS, Gerente) VALUES ("Ionara Quinterno Correia", "612.813.020-82", "517.95652.57-1", 12);
INSERT INTO Estoquistas (Id, Funcionario) VALUES(13, 13);

-- Clientes
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Sílvio Maciel Banha", "783.308.670-30", "(69) 97534-1448");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Jun Gil Mangueira", "001.309.090-92", "(85) 98016-3253");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Virgínia Fiúza Cambezes", "316.869.810-58", "(84) 98778-8527");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Valentin Macedo Domingues", "376.489.620-55", "(96) 99667-5885");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Weza Soares Calheiros", "506.709.750-79", "(97) 99878-7416");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Kimberly Fontinha Silvestre", "606.759.040-99", "(62) 98746-4713");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Nikita Simões Cavadas", "725.125.950-80", "(68) 99541-8538");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Theo Pequeno Caldas", "629.244.220-94", "(69) 96931-2167");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Bebiana Curado Lagos", "926.212.880-06", "(27) 98741-6483");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Janira Dutra Anlicoara", "489.236.020-19", "(96) 98650-9673");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Anita Monteiro Cisneiros", "406.920.890-98", "(96) 99453-2251");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Helton Caparica Candeias", "282.088.670-12", "(82) 99467-3396");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Joabe Melancia Assunção", "983.272.230-62", "(92) 97518-4734");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Edir Rebouças Canto", "758.601.830-89", "(95) 96941-8582");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Maximiano Rosado Camelo", "260.739.450-35", "(45) 97632-5683");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Élia Franca Rosmaninho", "223.319.860-37", "(86) 98257-4212");
INSERT INTO Clientes (Nome, CPF, Telefone) VALUES ("Jasmine Quinzeiro Coutinho", "752.272.060-58", "(45) 97118-5956");

-- Fornecedores
INSERT INTO Fornecedores (Nome) VALUES ("Luana e Nicolas Telas ME");
INSERT INTO Fornecedores (Nome) VALUES ("Erick e Milena Locações de Automóveis ME");
INSERT INTO Fornecedores (Nome) VALUES ("Juliana e Lívia Eletrônica ME");
INSERT INTO Fornecedores (Nome) VALUES ("Cauã e Andreia Limpeza Ltda");
INSERT INTO Fornecedores (Nome) VALUES ("Ana e Márcio Entregas Expressas ME");

-- PedidosManutencoes
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 1", 200, 1, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 2", 20000, 1, 2);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 3", 250, 2, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 4", 300, 1, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 5", 2000, 3, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 6", 200, 4, 2);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 7", 800, 4, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 8", 200, 1, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 9", 500.05, 17, 2);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 10", 50, 13, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 11", 1000, 12, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 12", 800, 11, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 13", 600, 10, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 14", 700, 9, 2);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 15", 270, 8, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 16", 280, 7, 1);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 17", 200, 6, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 18", 290, 6, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 19", 20000, 6, 3);
INSERT INTO PedidosManutencoes (Descricao, Valor, Cliente, Logista) VALUES ("Problema 20", 890, 5, 3);

-- PedidosCompras
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 1", 200, 0.05, 8, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 2", 20000, 0.15, 9, 2);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 3", 250, 0.05, 10, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 4", 300, 0.05, 11, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 5", 2000, 0.1, 12, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 6", 200, 0.05, 13, 2);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 7", 800, 0.05, 14, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 8", 200, 0.05, 15, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 9", 500.05, 0.05, 16, 2);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 10", 50, 0.05, 17, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 11", 1000, 0.1, 2, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 12", 800, 0.05, 1, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 13", 600, 0.05, 1, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 14", 700, 0.05, 6, 2);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 15", 270, 0.05, 1, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 16", 280, 0.05, 1, 1);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 17", 200, 0.05, 1, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 18", 290, 0.05, 4, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 19", 20000, 0.15, 1, 3);
INSERT INTO PedidosCompras (Produto, Valor, Desconto, Cliente, Logista) VALUES ("Produto 20", 890, 0.05, 1, 3);

-- SuporteOnline - 7 - 11
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 1", "2021-01-01 12:00:00", "Tipo 1", 17, 7);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 2", "2021-12-02 11:00:00", "Tipo 1", 16, 7);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 3", "2021-12-02 12:00:00", "Tipo 1", 15, 8);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 4", "2021-12-02 22:00:00", "Tipo 3", 14, 8);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 5", "2021-12-02 00:00:00", "Tipo 4", 5, 8);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 6", "2021-02-25 10:00:00", "Tipo 4", 5, 7);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 7", "2021-03-26 09:00:00", "Tipo 6", 13, 9);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 8", "2021-03-01 11:00:00", "Tipo 5", 10, 9);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 9", "2021-03-01 15:00:00", "Tipo 1", 5, 10);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 10", "2021-04-07 03:00:00", "Tipo 19", 3, 10);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 11", "2021-01-07 03:00:00", "Tipo 19", 3, 10);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 12", "2021-01-08 03:00:00", "Tipo 20", 5, 10);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 13", "2021-01-09 03:00:00", "Tipo 3", 3, 11);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 14", "2021-08-01 07:00:00", "Tipo 2", 2, 11);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 15", "2021-09-01 08:00:00", "Tipo 6", 2, 11);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 16", "2021-10-01 09:00:00", "Tipo 6", 2, 9);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 17", "2021-11-25 10:00:00", "Tipo 4", 4, 8);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 18", "2021-11-26 22:00:00", "Tipo 4", 5, 8);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 19", "2021-11-02 11:00:00", "Tipo 55", 17, 10);
INSERT INTO SuporteOnline (Descricao, Data, Tipo, Cliente, AtendenteOnline) VALUES ("Solicitação 20", "2021-01-01 03:00:00", "Tipo 100", 17, 9);

-- OrdemServicos
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 9", 500.05, "2021-04-07 03:00:00", 2, 6);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 10", 50, "2021-05-07 03:00:00", 3, 4);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 11", 1000, "2021-07-07 03:00:00", 3, 6);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 12", 800, "2021-07-07 03:00:00", 3, 6);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 13", 600, "2021-08-07 03:00:00", 1, 4);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 14", 700, "2021-04-07 03:00:00", 2, 5);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 15", 270, "2021-09-07 03:00:00", 1, 5);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 16", 280, "2021-04-07 03:00:00", 1, 4);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 17", 200, "2021-10-07 03:00:00", 3, 5);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 18", 290, "2021-10-07 03:00:00", 3, 5);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 19", 20000, "2021-10-07 03:00:00", 3, 4);
INSERT INTO OrdemServicos (Descricao, Valor, Tempo, Logista, Tecnico) VALUES ("Problema 20", 890, "2021-09-07 03:00:00", 3, 4);

-- SolicitacoesEstoque
INSERT INTO SolicitacoesEstoque (Descricao, Produto, Quantidade, Tecnico, Estoquista) VALUES ("Descricao 1", "Produto 1", 50, 6, 12);
INSERT INTO SolicitacoesEstoque (Descricao, Produto, Quantidade, Tecnico, Estoquista) VALUES ("Descricao 2", "Produto 2", 3, 4, 12);
INSERT INTO SolicitacoesEstoque (Descricao, Produto, Quantidade, Tecnico, Estoquista) VALUES ("Descricao 3", "Produto 3", 1, 6, 13);
INSERT INTO SolicitacoesEstoque (Descricao, Produto, Quantidade, Tecnico, Estoquista) VALUES ("Descricao 4", "Produto 4", 5, 6, 12);
INSERT INTO SolicitacoesEstoque (Descricao, Produto, Quantidade, Tecnico, Estoquista) VALUES ("Descricao 5", "Produto 2", 2, 4, 13);

-- Requisitcoes
INSERT INTO Requisitcoes (Produto, Quantidade, Estoquista, Fornecedor) VALUES ("Produto 1", 50, 12, 5);
INSERT INTO Requisitcoes (Produto, Quantidade, Estoquista, Fornecedor) VALUES ("Produto 2", 3, 12, 5);
INSERT INTO Requisitcoes (Produto, Quantidade, Estoquista, Fornecedor) VALUES ("Produto 3", 1, 13, 2);
INSERT INTO Requisitcoes (Produto, Quantidade, Estoquista, Fornecedor) VALUES ("Produto 4", 5, 12, 3);
INSERT INTO Requisitcoes (Produto, Quantidade, Estoquista, Fornecedor) VALUES ("Produto 2", 2, 13, 1);