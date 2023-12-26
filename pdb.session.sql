CREATE TABLE Pokemon (
    pokemon_id INT PRIMARY KEY,
    name VARCHAR(255),
    type1 VARCHAR(255),
    type2 VARCHAR(255)
);

CREATE TABLE Moves (
    move_id INT PRIMARY KEY,
    name VARCHAR(255),
    type VARCHAR(255),
    power INT,
    accuracy INT,
    pp INT
);