#SQL-Basics
## Schemas
the structure that was used to make the database, basically shows the commands that were used to make the DB
invoke by `.schema`

## Normalizing
process of making the data more efficient, like separating out one giant table into multiple smaller tables through [[Relating|relating]] those tables.

## `CREATE TABLE`

so you make a DB first `sqllite3 sth.db`, then u create a table through the sqllite or whatever software

``` sqlite
CREATE TABLE riders (
    "id",
    "name"
);
```

## Data Types, Storage Classes
### storage classes
1. NULL
2. INTEGER
3. REAL(floats, decimals)
4. TEXT
5. BLOB(binary large objects(image, audio whatever file))

### Data Types
Storage Classes have data types,
Integer has 0-byte, 2-byte etc... INTEGERS.

### Type Affinity:
Each column has a type affinity that it tries to convert other values to. type affinities are the same as storage classes.

how to make tables with types:
``` sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT
);
```


## Table Constraints

``` sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
);

CREATE TABLE stations (
    "id" INTEGER,
    "name" TEXT,
    "line" TEXT,
    PRIMARY KEY("id")
);

CREATE TABLE visits (
    "rider_id" INTEGER,
    "station_id" INTEGER,
    FOREIGN KEY("rider_id") REFERENCES "riders"("id"),
    FOREIGN KEY("station_id") REFERENCES "stations"("id")
);
```


## Column Constraints
1. `CHECK`
2. `DEFAULT`
Using default value if none is supplied(null by default)
3. `NOT NULL`
	1. can be used to require values for new entires?
4. `UNIQUE`

``` sql
CREATE TABLE riders (
    "id" INTEGER,
    "name" TEXT,
    PRIMARY KEY("id")
);

CREATE TABLE stations (
    "id" INTEGER,
    "name" TEXT NOT NULL UNIQUE,
    "line" TEXT NOT NULL,
    PRIMARY KEY("id")
);

CREATE TABLE visits (
    "rider_id" INTEGER,
    "station_id" INTEGER,
    FOREIGN KEY("rider_id") REFERENCES "riders"("id"),
    FOREIGN KEY("station_id") REFERENCES "stations"("id")
);
```


## Altering Tables

### DROP TABLE
just delete a table

```sql
ALTER TABLE "VISITS"
RENAME TO "SWIPES"
ADD COLUMN "SWIPETYPE" TEXT;
```

you can also just open the .schema file and just change the values from there instead of running these commands. 