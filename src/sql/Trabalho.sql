--  Criação do Database

CREATE DATABASE Edegan;

USE Edegan;

--  Criação do Usuário

CREATE USER 'edegan' @'localhost' IDENTIFIED BY 'password123';

--  Concessão de Permissões

GRANT
SELECT,
INSERT,
UPDATE,
DELETE
    ON Edegan.* TO 'edegan' @'localhost';

--  Criação das Tabelas

--  Tabela: PRODUTOS

CREATE TABLE
    PRODUTOS(
        id_produto INT AUTO_INCREMENT PRIMARY KEY,
        nome_produto VARCHAR(255),
        descricao TEXT,
        preco_unitario DECIMAL(10, 2)
    )

--  Tabela: ENTRADAS_ESTOQUE

CREATE TABLE
    ENTRADAS_ESTOQUE(
        id_entrada INT AUTO_INCREMENT PRIMARY KEY,
        id_produto INT,
        quantidade INT,
        data_entrada DATE,
        FOREIGN KEY (id_produto) REFERENCES PRODUTOS(id_produto)
    )

--  Tabela: SAIDAS_ESTOQUE

CREATE TABLE
    SAIDAS_ESTOQUE(
        id_saida INT AUTO_INCREMENT PRIMARY KEY,
        id_produto INT,
        quantidade INT,
        data_saida DATE,
        FOREIGN KEY (id_produto) REFERENCES PRODUTOS(id_produto)
    )

--  Inserção de Dados:

--  Execute comandos INSERT para adicionar novos produtos, operações de entrada e saída.

INSERT INTO
    PRODUTOS (
        nome_produto,
        descricao,
        preco_unitario
    )
VALUES ('Heineken', 'Lata', 4.99), ('Amstel', 'Lata', 3.99), (
        'Schornstein',
        'Garrafa de 500ml',
        15.75
    ), ('Eisenbahn', 'Longneck', 6.99), ('Patagonia', 'Lata', 7.99);

INSERT INTO
    ENTRADAS_ESTOQUE (
        id_produto,
        quantidade,
        data_entrada
    )
VALUES (1, 50, '2023-11-20'), (2, 30, '2023-11-19'), (3, 25, '2023-11-18'), (4, 40, '2023-11-17'), (5, 20, '2023-11-16');

INSERT INTO
    SAIDAS_ESTOQUE (
        id_produto,
        quantidade,
        data_saida
    )
VALUES (1, 10, '2023-11-15'), (2, 15, '2023-11-14'), (3, 8, '2023-11-13'), (4, 20, '2023-11-12'), (5, 5, '2023-11-11');

--  Utilize comandos UPDATE para modificar a quantidade em estoque de um produto

UPDATE ENTRADAS_ESTOQUE SET quantidade = 99 WHERE id_entrada = 1;

--  Execute comandos DELETE para remover registros.

DELETE from SAIDAS_ESTOQUE WHERE id_saida = 5;

--  Selecione todos os produtos em estoque.

SELECT * from PRODUTOS 

--  Liste as operações de entrada em um determinado período.

SELECT *
from ESTRADAS_ESTOQUE
WHERE
    data_entrada BETWEEN "2023-11-16" AND "2023-11-18"

--  Mostre as operações de saída de um produto específico.

--  Calcule o saldo atual de cada produto.

--  Identifique produtos com estoque abaixo de um nível mínimo.

--  Agrupe e conte as operações de estorno realizadas.