--  Criação do Database
CREATE DATABASE ControleEstoque;

--  Seleciona a Database 
USE ControleEstoque;

--  Criação do Usuário:
CREATE USER 'edeganEstoque' @'localhost' IDENTIFIED BY 'password123';

--  Visualiza todos os usuários no MySQL
SELECT
    user
FROM
    mysql.user;

--  Concessão de Permissões:
GRANT ALL PRIVILEGES ON Edegan.* TO 'edeganEstoque' @'localhost';

--  Criação das Tabelas:
CREATE TABLE PRODUTOS (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,
    nome_produto VARCHAR(255),
    descricao TEXT,
    preco_unitario DECIMAL(10, 2)
);

CREATE TABLE ENTRADAS_ESTOQUE (
    id_entrada INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    quantidade INT,
    data_entrada DATE,
    FOREIGN KEY (id_produto) REFERENCES PRODUTOS (id_produto)
);

CREATE TABLE SAIDAS_ESTOQUE (
    id_saida INT AUTO_INCREMENT PRIMARY KEY,
    id_produto INT,
    quantidade INT,
    data_saida DATE,
    FOREIGN KEY (id_produto) REFERENCES PRODUTOS (id_produto)
);

--  Inserção de Dados
INSERT INTO
    PRODUTOS (nome_produto, descricao, preco_unitario)
VALUES
    ('Heineken', 'Lata', 4.99),
    ('Amstel', 'Lata', 3.99),
    ('Schornstein', 'Garrafa de 500ml', 15.75),
    ('Eisenbahn', 'Longneck', 6.99),
    ('Patagonia', 'Lata', 7.99),
    ('Corona', 'Longneck', 7.89),
    ('Spaten', 'Longneck', 6.89),
    ('Stella Artois ', 'Longneck', 5.99),
    ('Budweiser ', 'Lata', 4.99),
    ('Colorado', 'Garrafa de 600ml', 13.99);

INSERT INTO
    ENTRADAS_ESTOQUE (id_produto, quantidade, data_entrada)
VALUES
    (1, 10, '2023-11-15'),
    (2, 15, '2023-11-14'),
    (3, 8, '2023-11-13'),
    (4, 20, '2023-11-12'),
    (5, 5, '2023-11-11'),
    (6, 12, '2023-11-10'),
    (7, 18, '2023-11-09'),
    (8, 25, '2023-11-08'),
    (9, 7, '2023-11-07'),
    (10, 14, '2023-11-06');

INSERT INTO
    SAIDAS_ESTOQUE (id_produto, quantidade, data_saida)
VALUES
    (1, 10, '2023-11-17'),
    (2, 4, '2023-11-20'),
    (3, 3, '2023-11-21'),
    (4, 15, '2023-11-15'),
    (5, 3, '2023-11-18'),
    (6, 12, '2023-11-12'),
    (7, 17, '2023-11-27'),
    (8, 20, '2023-11-10'),
    (9, 6, '2023-11-07'),
    (10, 10, '2023-11-06');

--  Utilize comandos UPDATE para modificar a quantidade em estoque de um produto.
UPDATE
    SAIDAS_ESTOQUE
SET
    quantidade = 5
WHERE
    id_produto = 2;

--  Execute comandos DELETE para remover registros (por exemplo, estornar uma entrada ou saída).
DELETE FROM
    SAIDAS_ESTOQUE
WHERE
    id_saida = 9;

--  Selecione todos os produtos em estoque.
SELECT
    P.id_produto,
    P.nome_produto,
    SUM(E.quantidade) - SUM(S.quantidade) AS total_quantidade
FROM
    PRODUTOS P
    INNER JOIN ENTRADAS_ESTOQUE E ON P.id_produto = E.id_produto
    INNER JOIN SAIDAS_ESTOQUE S ON P.id_produto = S.id_produto
GROUP BY
    P.id_produto,
    P.nome_produto
HAVING
    total_quantidade > 0;

--  Liste as operações de entrada em um determinado período.
SELECT
    id_produto,
    data_entrada,
    quantidade
FROM
    ENTRADAS_ESTOQUE
WHERE
    data_entrada BETWEEN '2023-11-10'
    AND '2023-11-13';

--  Mostre as operações de saída de um produto específico.
SELECT
    *
FROM
    SAIDAS_ESTOQUE
WHERE
    data_saida = '2023-11-10';

--  Calcule o saldo atual de cada produto
SELECT
    P.id_produto,
    P.nome_produto,
    P.preco_unitario,
    SUM(E.quantidade) - SUM(S.quantidade) AS total_quantidade,
    (SUM(E.quantidade) - SUM(S.quantidade)) * P.preco_unitario AS total_valor
FROM
    PRODUTOS P
    INNER JOIN ENTRADAS_ESTOQUE E ON P.id_produto = E.id_produto
    INNER JOIN SAIDAS_ESTOQUE S ON P.id_produto = S.id_produto
GROUP BY
    P.id_produto,
    P.nome_produto,
    P.preco_unitario
ORDER BY
    P.id_produto;

--  Identifique produtos com estoque abaixo de um nível mínimo.
SELECT
    P.id_produto,
    P.nome_produto,
    SUM(E.quantidade) - SUM(S.quantidade) AS total_quantidade
FROM
    PRODUTOS P
    INNER JOIN ENTRADAS_ESTOQUE E ON P.id_produto = E.id_produto
    INNER JOIN SAIDAS_ESTOQUE S ON P.id_produto = S.id_produto
GROUP BY
    P.id_produto,
    P.nome_produto
HAVING
    total_quantidade > 4;

--  Agrupe e conte as operações de estorno realizadas.
--  ?????????????????????????????????????????????????
--  ?????????????????????????????????????????????????
--  ?????????????????????????????????????????????????
--  ?????????????????????????????????????????????????
--  ?????????????????????????????????????????????????
--  ?????????????????????????????????????????????????