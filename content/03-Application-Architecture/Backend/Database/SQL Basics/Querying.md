#Backend #Database #SQL-Basics 
## Select
Key word used to select a row inside of a table in the DB
`SELECT 'row name' FROM 'tablename';`
(u dont need to capitalize the keywords but its good for readiability)
**YOU DO TABLE NAMES IN DOUBLE QUOTES AND SEARCH STRINGS IN SINGLE**
## Limit
`SELECT "row name" FROM "tablename" LIMIT 10;` it just shows 10 rows instead of all of them.

## Where
`SELECT 'row name' FROM 'tablename' WHERE "year" = 2023;`
just an equivalent of a basic IF statement
supports 
	1. = instead of ==
	2. !=
	3. <>
		same thing as != for some reason

## Not
`SELECT 'row name' FROM 'tablename' WHERE NOT "format" = 'hardcover'`


## AND, OR, ()
`WHERE ("year" = 2022 OR "year" = 2023)`

## NULL

`SELECT  "title", "translator" FROM "longlist" WHERE "translator" IS NULL`

## LIKE
Operators:
- %
	`SELECT 'row name' FROM 'tablename' WHERE "title" LIKE '%love%`
	matches strings to the character, so as long as it has *love* in it, itll return
	% behaves as a * in a file explorer query, so if its love% it only returns if love is at the begning or if its %love if its only at the end
- _
	matches all characters `LIKE 'P__'` so P with 2 characters we dont care what they are after.

**Like is case insensetive but = is SENSETIVE**

## >, <, >=, <=, BETWEEN

just normal if statements have to combine it with `AND` keyword


## ORDER BY

`ORDER BY "rating" DESC LIMIT 10;`
Just visualizes the data in whatever order we do.  can order by multiple Chryteria, `ORODER By "sth" DESC, 'STHELSE" ASC;`

## Aggregate Functions
1. COUNT
2. AVG
	1. `SELECT AVG("rating") FROM "longlist";`
3. MIN
4. MAX
5. SUM


