#Backend #Database #SQL-Basics 
## Inserting data
use `INSERT INTO`
``` sql
INSERT INTO "collections" ("id", "title", "accession_number", "acquired")
VALUES (1, 'Profusion of flowers', '56.257', '1956-04-12');
```

Problem is if the ID is a primary key if, some of the values are not automatic it could make duplicates and cause problems. **So you can just leave the ID part**. 

``` SQL
INSERT INTO "collections" ("title", "accession_number", "acquired")
VALUES ('Farmers working at dawn', '11.6152', '1911-08-03');
```


you can also just do multiple value rows at a time and insert multiple entries in one go.

You can also import .csv files into the rows if you set up ur settings properly. 
```
.import --csv --skip 1 mfa.csv collections
```
skips the first header row, if you dont put the skip there, it can automatically recognize them as header names and put those as the columns.

you can also just insert parts of an entire table into another table

``` sql
INSERT INTO "collections" ("title", "accession_number", "acquired") 
SELECT "title", "accession_number", "acquired" FROM "temp";
```

## Deleting Data

``` SQL
DELETE FROM "collections"
WHERE "acquired" < '1909-01-01';
```

### Deleting Rows w/ Foreign Keys
so if we try to delete sth that is a foreing key somewhere it throws a `FOREGIN KEY restraint failed` error
things we can do
1. `ON DELETE RESTRICT`
2. NO ACTION
3. SET NULL
4. SET DEFAULT
5. CASCADE
	1. basically cascade and deleted all their affiliations.
	2. ```FOREIGN KEY("artist_id") REFERENCES "artists"("id") ON DELETE CASCADE```
if you delete sth and not have the `AUTO INCREMENT` setting on, after u insert sth new, the new primary ID will be from the latest and highest entry in the table, (deleted 3 but have 4 will be 5), if u want 3 have to turn AUTO INCREMENT, ON.

## Updating Data

``` sql
UPDATE "created"
SET "artist_id" = (
    SELECT "id"
    FROM "artists"
    WHERE "name" = 'Li Yin'
)
WHERE "collection_id" = (
    SELECT "id"
    FROM "collections"
    WHERE "title" = 'Farmers working at dawn'
);
```

## Triggers

basically do a specific command anytime that a set condition happens (like when a deletion happens etc...)

``` sql
CREATE TRIGGER name
AFTER(or BEFORE) UPDATE(or DELETE)
FOR EACH ROW
BEGIN(Start of what should be run)
...
END;
```

Actual Example:
```sql
CREATE TRIGGER "SELL"
	BEFORE DELETE ON "COLLECTIONS"
	FOR EACH ROW
	BEGIN
		INSERT INTO "TRANSACTIONS" ("TITLE", "ACTION")
		VALUES (OLD."TITLE", 'SOLD')
	END;
```

## Soft Deletion

basically logging things that you delete in a separate table