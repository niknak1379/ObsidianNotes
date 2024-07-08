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
	1. 
