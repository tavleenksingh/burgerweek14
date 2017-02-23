-- schema for burgers database, it contains one table called burgers and has four columns
CREATE DATABASE burgers14_db;

USE burgers14_db;

CREATE TABLE burgers14 (
    `id` INT (10) AUTO_INCREMENT NOT NULL 
    , `burger_name` VARCHAR(30) NOT NULL
    , `devoured` BOOLEAN DEFAULT false
    , `created_date` TIMESTAMP
    , PRIMARY KEY (`id`)
);