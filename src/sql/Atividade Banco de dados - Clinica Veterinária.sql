-- Eduardo Rebelo Degan
-- Peço desculpas pelo atraso da atividade

-- Criar o banco de dado
CREATE DATABASE ClinicaVeterinaria;
USE ClinicaVeterinaria;

--------------------------------------------------------------------------------------------------

-- Criar a tabela de Animais
CREATE TABLE Animais (
    IDAnimal INT PRIMARY KEY,
    Nome VARCHAR(255),
    Especie VARCHAR(255)
);

--------------------------------------------------------------------------------------------------

-- Criar a tabela de Proprietários
CREATE TABLE Proprietarios (
    IDProprietario INT PRIMARY KEY,
    Nome VARCHAR(255),
    Telefone VARCHAR(20)
);

--------------------------------------------------------------------------------------------------

-- Criar a tabela de Consultas
CREATE TABLE Consultas (
    IDConsulta INT PRIMARY KEY,
    IDAnimal INT,
    IDProprietario INT,
    DataConsulta DATE,
    FOREIGN KEY (IDAnimal) REFERENCES Animais(IDAnimal),
    FOREIGN KEY (IDProprietario) REFERENCES Proprietarios(IDProprietario)
);

--------------------------------------------------------------------------------------------------

--Inserir animais
INSERT INTO Animais (IDAnimal, Nome, Especie) VALUES
(1, 'Dog', 'Cachorro'),
(2, 'Cat', 'Gato'),
(3, 'Fox', 'Raposa'),
(4, 'Rabbit', 'Coelho'),
(5, 'Rat', 'Rato');

--------------------------------------------------------------------------------------------------

-- Inserir proprietários
INSERT INTO Proprietarios (IDProprietario, Nome, Telefone) VALUES
(1, 'Maria', '123-456-7890'),
(2, 'João', '234-567-8901'),
(3, 'Ana', '345-678-9012'),
(4, 'Carlos', '456-789-0123'),
(5, 'Julia', '567-890-1234');

-- Inserir consultas
INSERT INTO Consultas (IDConsulta, IDAnimal, IDProprietario, DataConsulta) 
VALUES 
(1, 1, 1, '2023-11-02'), 
(2, 2, 2, '2023-11-03'), 
(3, 3, 3, '2023-11-04'), 
(4, 4, 4, '2023-11-05'), 
(5, 5, 5, '2023-11-06');


--------------------------------------------------------------------------------------------------

--  Gerar consultas

-- Selecionar todos os animais e seus proprietários associados nas consultas::
SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario;

-- Selecionar animais de consultas específicas usando o ID da consulta:
SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario
WHERE C.IDConsulta = 4;


-- Selecionar animais de consultas em uma data específica:
SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario
WHERE C.DataConsulta = '2023-11-06';


-- Selecionar animais de um proprietário específico usando o ID do proprietário:
SELECT A.Nome AS NomeAnimal
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario
WHERE P.IDProprietario = 1;

-- Selecionar animais de consultas com base no nome do proprietário:
SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario
WHERE P.Nome = 'Julia';

--------------------------------------------------------------------------------------------------

-- Atualizar informações de animais
UPDATE Animais
SET Nome = 'Ratazana'
WHERE IDAnimal = 5;

--------------------------------------------------------------------------------------------------

-- Atualizar informações de proprietários
UPDATE Proprietarios
SET Telefone = '234-567-8901'
WHERE IDProprietario = 1;

--------------------------------------------------------------------------------------------------

-- Excluir registros de consultas
DELETE FROM Consultas
WHERE IDConsulta = 5;

--------------------------------------------------------------------------------------------------

-- Consultas

-- Selecione todos os animais com seus respectivos proprietários.
SELECT A.Nome AS NomeAnimal, A.Especie, P.Nome AS NomeProprietario, P.Telefone
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario;

-- Liste todas as consultas, incluindo o nome do animal, nome do proprietário e
-- data da consulta.
SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario, C.DataConsulta
FROM Animais A
JOIN Consultas C ON A.IDAnimal = C.IDAnimal
JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario;

-- Conte quantas consultas ocorreram em um dia específico.
SELECT COUNT(*) AS NumeroDeConsultas
FROM Consultas
WHERE DataConsulta = '2023-11-02';

-- Ordene os animais em ordem alfabética de nome.
SELECT Nome, Especie
FROM Animais
ORDER BY Nome ASC;

-- Ordene as consultas em ordem decrescente de data
SELECT NomeAnimal, NomeProprietario, DataConsulta
FROM (
    SELECT A.Nome AS NomeAnimal, P.Nome AS NomeProprietario, C.DataConsulta
    FROM Animais A
    JOIN Consultas C ON A.IDAnimal = C.IDAnimal
    JOIN Proprietarios P ON C.IDProprietario = P.IDProprietario
) AS ConsultasOrdenadas
ORDER BY DataConsulta DESC;






