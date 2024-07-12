#Backend #Database #SQL-Basics 
# Relational DBs
one to one relationships and one to many relationships, and many to many relationships.

### Entity Relationship(ER) Diagram
Entities(things that we are representing, like authors, books)
![relationship notation diagram](https://th.bing.com/th/id/OIP.7UJR1OrvgrLY2qHCmDhBBgHaHn?rs=1&pid=ImgDetMain)

any item in the table has a **PRIMARY KEY** like an ISBN for a book that is unique and used to identify it. 

foreign key: primary key in a foreign table.
you can have foreign keys from multiple tables in the same table just have to make sure the DB knows which table the foreign keys are refering to in each column. 


## Subqueries(nested Query)
works well for one to many and many to many relations.
Using both primary and foreign keys.
``` SQL
SELECT "title"
FROM "books"
WHERE "publisher_id" = (
    SELECT "id"
    FROM "publishers"
    WHERE "publisher" = 'Fitzcarraldo Editions'
);
```


### `IN`
when the column is in some set of values, basically **=** but for a an array of queries, it returns the = for all of them.
``` SQL
SELECT "title"
FROM "books"
WHERE "id" IN (
    SELECT "book_id"
    FROM "authored"
    WHERE "author_id" = (
        SELECT "id"
        FROM "authors"
        WHERE "name" = 'Fernanda Melchor'
    )
);
```

## `JOIN`

 ``` SQL
SELECT *
FROM "sea_lions"
JOIN "migrations" ON "migrations"."id" = "sea_lions"."id";
```

Inner Join:
	keeps the data that is between both tables
Outer Join:
	1. Left Join:
		1. prioritizes the left table(basically doesnt throw out stuff on the left if there is no matching on the right table)
	2. Right Join:
		1. prioritizes the right table
	3. Full Join:
		1. keeps everything from both
Natural Join:
	basically inner join but deletes the second row that is being matched so that there is no duplicate.


## Sets

### `INTERSECT`
just normal intersect set operation.
### `UNION`
just a normal union set operation.
### `EXCEPT`
Normal exclusion

## Groups
Just group entryes of the table by values of a certain column
(have a id and a rating column, group by id)
``` SQL
SELECT "book_id", ROUND(AVG("rating"), 2) AS "average rating"
FROM "ratings"
GROUP BY "book_id"
HAVING "average rating" > 4.0; //just another conditional
```