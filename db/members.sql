DROP DATABASE IF EXISTS members;
CREATE DATABASE members;

\c members;

CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    bio TEXT
);

INSERT INTO users (username, email, bio)
VALUES ('Jamie', 'jc2820@hotmail.com', 'The goddamn admin');