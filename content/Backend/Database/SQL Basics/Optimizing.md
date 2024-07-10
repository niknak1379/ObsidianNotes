#SQL-Basics
## Index
basically instead of seraching the entire table's each row using [[Linear Search]] for the title or whatever, we can make an index that is used to search the table probably using [[Binary Search]]

``` sql
CREATE INDEX "title_index" ON "movies" ("title");
```

Creating too many Indexes causes space problems, it can also make insertion and deletion take longer.

## Indexing Multiple Tables

### Covering Index
Basically the index itself contains the infromation in the row, so you dont have to go the table to retrieve the information, and can retrieve it directly from the index. Makes it faster, but again **SPACE** problems. 
Basically turns the search into a [[Binary Search]] again.
Changes the Time from **Linear to Log(n)**.

Cons:
	t takes longer for insertion and deletions, if we have indexed sth, because after making the changes in the original table, we also have to make the same changes in the index tree.

## Partial Index
Same thing as Covering index but only with some of the row datas being completely included in the index.
```sql
CREATE INDEX "recents" ON "movies" ("titles")
WHERE "year" = 2023;
```

## Vacuum
basically after u delete indexes u have to run this so that the data base compresses the space that was allocated to the indexes so that it can be reused again.

## Concurrency

basically to make sure that the database doesn't encounter race conditions or deadlock on anything, we use transaction
### Transactions
Follows [[ACID]]
1. Atomicity
2. Consistency
3. Isolation
4. Durability
``` sql
BEGIN TRANSACTION;
UPDATE "accounts" SET "balance" = "balance" + 10 WHERE "id" = 2;
UPDATE "accounts" SET "balance" = "balance" - 10 WHERE "id" = 1;
COMMIT;
```

if you want to make sure that they get set back to previous values if any checks fail, u use ROLLBACK instead of COMMIT
``` sql
BEGIN TRANSACTION;
UPDATE "accounts" SET "balance" = "balance" + 10 WHERE "id" = 2;
UPDATE "accounts" SET "balance" = "balance" - 10 WHERE "id" = 1; -- Invokes constraint error
ROLLBACK;
```

In order to do all of these transactions in most databses LOCK the tables that are being changed.
 Tables states:
 1. unlocked
 2. shared
	 1. used for reads
	 2. multiple processes can use this table
 3. exclusive
	 1. used for writes
	 2. only one process and does not allow other processes to access the DB or other transactions to occur. 