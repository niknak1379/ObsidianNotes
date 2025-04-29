---
creation date: 2025-04-28 14:24
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# ACID

<< ---------------------------------------------------------------- >>

1. Atomicity: 
	1. Either all writes succeed or none of them do. 
2. Consistency: 
	1. all fails occur gracefully, no invariants are broken.
		1. meaning any data written to the database has to follow the database rules
3. Isolation:
	1. no race conditions. 
	2. Database is a multithreaded server, so two threads should not have race conditions. 
4. Durability:
	1. committed writes don't get lost.



## Read Committed Isolation
Commiting a write: means all the operations are finished.

### Race Condition Examples:
1. Dirty Write: 
	1. we have 2 threads. both are writing a value and both are committing it, resulting in the value updated later to be committed, resulting in inconsistent results. => We are Writing over uncommitted values. 
	2. Fix: locking values. 
2. Dirty Reads:
	1. reading a value that has not been committed yet. (like having multiple operations with one succeeding and one failing, and the read happening after the first operation(the commit happens after the second operation is finished)). 
	2. Fix: 
		1. row level locks(is slow tho, so should be avoided for systems that require faster reads)
		2. keep a copy of the old values during operations. 
3. Snapshot Isolation:
	1. Use a Write Ahead Log:
		1. you store the operations that overwrite a value with the index(Nth operation that the operation is). 
		2. So when u are reading the table, you can only read the table up until the Nth entry in the WAL(read a snapshot before other writes have occurred in the table)
		3. Since you are only logging transactions that overwrite a value it shouldn't take much extra space.
		4. 
	2. During a really big read on the database there might be write operations happening that will cause invariability in the DB. Using a Snapshot WAL will fix that as all the transactions are recorded in the log. 
4. Write Skew:
	1. The doctor example: there has to be at least one doctor available at all times, but 2 doctors check the availability table at the same time seeing both are available so both go on break, putting the available number to 0 -> breaking the invariable
	2. Two Writes individually check the table to see if the write breaks any invariants, it doesn't so they both go ahead, breaking an invariant
	3. Solution:
		1. locking but slightly different?
			1. you basically have to grab the locks of the entire table, not just the row that is being updates. 
5. Phantom Writes:
	1. Example: Buying from the cafe example. You and another person both try to buy a cupcake. The database is a row of transactions(item bought and person). So you both buy the last cupcake and make a write to the DB.
	2. Phantoms occur when two people write new rows that conflict. 
		1. Since these are new rows, there are no locks to grab. 
	3. Solution: materializing conflicts:
		1. for every item in the bakery stock we need to pre populate the row into the database so that we can grab a lock for it. 

## Actual Serial Execution
Instead of doing all the locks, we can just run everything on one core instead of multithreading. (VoltDB)

Since Disk is very slow, you cant do this on databases stored on disk or there will be too much congestion -> In memory databases are perfect for this -> less space and less durable data


Network is also very slow, and sending complicated queries over the network will take a long time. ->

### Stored Procedures:
basically SQL functions sent over the network in advance( you don't have to send the query, you only need to send the parameters)

They are harder to manage tho since they are defined in the database and are harder to be put into the version control especially if there are multiple instances of the database. 


## Two Phase Locking - Isolation/Serializability

Makes concurrent transactions seem as if they were running on one thread.

