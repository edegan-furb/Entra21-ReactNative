CREATE DATABASE ControleEstoque;

USE ControleEstoque;

CREATE USER 'edeganEstoque' @'localhost' IDENTIFIED BY 'password123';

GRANT ALL PRIVILEGES ON Edegan.* TO 'edeganEstoque' @'localhost';

CREATE USER 'vendaEstoque' @'localhost' IDENTIFIED BY 'password456';

CREATE USER 'compraEstoque' @'localhost' IDENTIFIED BY 'password789';

CREATE TABLE
    PRODUTOS(
        id_produto INT AUTO_INCREMENT PRIMARY KEY,
        nome_produto VARCHAR(255),
        descricao TEXT,
        preco_unitario DECIMAL(10, 2)
    )

CREATE TABLE
    ENTRADAS_ESTOQUE(
        id_entrada INT AUTO_INCREMENT PRIMARY KEY,
        id_produto INT,
        quantidade INT,
        data_entrada DATE,
        FOREIGN KEY (id_produto) REFERENCES PRODUTOS(id_produto)
    )

CREATE TABLE
    SAIDAS_ESTOQUE(
        id_saida INT AUTO_INCREMENT PRIMARY KEY,
        id_produto INT,
        quantidade INT,
        data_saida DATE,
        FOREIGN KEY (id_produto) REFERENCES PRODUTOS(id_produto)
    )

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

SELECT
    P.id_produto,
    P.nome_produto,
    P.descricao,
    P.preco_unitario,
    E.quantidade AS entrada_quantidade,
    E.data_entrada,
    S.quantidade AS saida_quantidade,
    S.data_saida
FROM PRODUTOS P
    LEFT JOIN ENTRADAS_ESTOQUE E ON P.id_produto = E.id_produto
    LEFT JOIN SAIDAS_ESTOQUE S ON P.id_produto = S.id_produto;