#Backend #Database #SQL-Basics 
## [[MySQL]]

its an entire SQL server that can have multiple data bases inside, you also have to log in, this seems weird tho.

It has different types than sqlite3, so have to look those up if im going to use them at all. 

``` mysql
CREATE TABLE `cards` (
    `id` INT AUTO_INCREMENT,
    PRIMARY KEY(`id`)
);
```


``` mysql
CREATE TABLE `swipes` (
    `id` INT AUTO_INCREMENT,
    `card_id` INT,
    `station_id` INT,
    `type` ENUM('enter', 'exit', 'deposit') NOT NULL,
    `datetime` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `amount` DECIMAL(5,2) NOT NULL CHECK(`amount` != 0),
    PRIMARY KEY(`id`),
    FOREIGN KEY(`station_id`) REFERENCES `stations`(`id`),
    FOREIGN KEY(`card_id`) REFERENCES `cards`(`id`)
);
```

### Stored Procedures

basically just functions but in MySQL. 

``` Mysql
delimiter //
CREATE PROCEDURE `current_collection`()
BEGIN
    SELECT `title`, `accession_number`, `acquired` 
    FROM `collections` 
    WHERE `deleted` = 0;
END//
delimiter ;
CALL current_collection();
```
delimiter is just what signifies the end of an executing unit, and Mysql doesnt support multiple so u have to define extra ones if ur making functions like this. [Look it up for more info(stack overflow)](https://stackoverflow.com/questions/10259504/delimiters-in-mysql) 

### Stored Procedures with Params

``` mysql
delimiter //
CREATE PROCEDURE `sell`(IN `sold_id` INT)
BEGIN
    UPDATE `collections` SET `deleted` = 1 
    WHERE `id` = `sold_id`;
    INSERT INTO `transactions` (`title`, `action`)
    VALUES ((SELECT `title` FROM `collections` WHERE `id` = `sold_id`), 'sold');
END//
delimiter ;
CALL sell(2);
```
## [[PostGreSQL]]

``` postgresql
CREATE TABLE "swipes" (
    "id" SERIAL,
    "card_id" INT,
    "station_id" INT,
    "type" "swipe_type" NOT NULL,
    "datetime" TIMESTAMP NOT NULL DEFAULT now(),
    "amount" NUMERIC(5,2) NOT NULL CHECK("amount" != 0),
    PRIMARY KEY("id"),
    FOREIGN KEY("station_id") REFERENCES "stations"("id"),
    FOREIGN KEY("card_id") REFERENCES "cards"("id")
);
```

## Scaling

you can do vertical but horizontal is the fun part

### [[Horizontal Scaling]]
Replication: Keeping copies of our database on multiple servers. 

Models:
1. Single-leader
	1. every single time sth is added to the leader, it is copied to the read only data base, which is called the [[Read Replica]], which can be done both sync and async. 
2. Multi-leader
3. Leaderless

### Sharding
taking very large DBs and splitting them into multiple smaller ones on multiple machines. 
have to keep copies of data accross servers, because if you dont, theres going to be only one single point of failure.

## Access Control
Theres also user accounts in mySQL and PostGreSQL, which is good for making different requests from different users and increases security. 
``` mysql
GRANT SELECT ON `rideshare`.`analysis` TO 'carter';
```

## SQL Injection Attacks
you can just ask things youre not supposed to by adding UNION or OR statements.
```
    SELECT * FROM `accounts`
    WHERE `id` = 1 UNION SELECT * FROM `accounts`;
```

How to Prevent them:
`PREPARE` Statements: it cleans up the input and makes sure weird things do not run. 
```mysql
PREPARE `balance_check`
FROM 'SELECT * FROM `accounts`
WHERE `id` = ?';

SET @id = 1;
EXECUTE `balance_check` USING @id;
```
