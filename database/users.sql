CREATE DATABASE policontrol;

CONNECT policontrol;

-- PRIMERA TABLA
CREATE TABLE users (
  userId INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  typeUser VARCHAR(15),
  password VARCHAR(30) NOT NULL,
  contact VARCHAR(40),
  reminderKey VARCHAR(20),
  tokenUser TEXT
);

ALTER TABLE users AUTO_INCREMENT = 0;

SELECT * FROM users;