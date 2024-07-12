#Backend #Database #SQL-Basics 
## Views
Virtual Tables made by querying like joining multiple tables together, that can be saved?
why use views:
1. simplifying:
	1. putting data tohether from different tables without actually making a table. 
2. aggregating
	1. running functions like sum and average etc
3. partitioning
	1. dividing data into logical pieces
4. securing
	1. hiding columns that should be private in the DB
### Simplifying
``` sql
CREATE VIEW "longlist" AS
SELECT "name", "title" FROM "authors"
JOIN "authored" ON "authors"."id" = "authored"."author_id"
JOIN "books" ON "books"."id" = "authored"."book_id";
```

### Aggregating
``` sql
CREATE VIEW "average_book_ratings" AS
SELECT "book_id" AS "id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" 
FROM "ratings"
JOIN "books" ON "ratings"."book_id" = "books"."id"
GROUP BY "book_id";
```

### Common Table Expressions
#### temp views
only exist for the connection to the database and is deleted when the connection is done. 
``` sql
WITH "average_book_ratings" AS (
    SELECT "book_id", "title", "year", ROUND(AVG("rating"), 2) AS "rating" FROM "ratings"
    JOIN "books" ON "ratings"."book_id" = "books"."id"
    GROUP BY "book_id"
)
SELECT "year" ROUND(AVG("rating"), 2) AS "rating" FROM "average_book_ratings"
GROUP BY "year";
```
### Partitioning
just making the data easier to digest
### Security
just make views with certain columns gone or written as anonymus with the actual data still being in the DB

### Triggers with Views, Soft Deletion
soft deletion first in [[Writing]].
like you could just have a view that excludes the soft deleted entries(entries where theyre deleted value is equal to 1 or yes).