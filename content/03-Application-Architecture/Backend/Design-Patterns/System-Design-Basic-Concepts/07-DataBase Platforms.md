---
creation date: 2025-05-06 18:58
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Database Platforms

<< ---------------------------------------------------------------- >>
### Relational vs. Non-relational DBs
You just establish relationships between tables using foreing keys and joins and what not.

Relational:
-:
1. poor data locality
	1. could even be on different nodes on different systems 
		1. which means for writes we will have to use [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/06-Partitioning#Two Phase Commit - Distributed Transactions|distributed transactions]]
		2. two phase commit is slow for both reads and writes
Non Relational Databases:
NoSQL databases use demoralized data
meaning we keep data in records or key-value stores.

+:
1. better data locality
-:
2. but now we have repeat data
3. since the data is denormalized, that means if we write or update a record we have to find every entry of it and change it there(distributed transaction). Meaning we have to possible make a write on many records and shards. 

### MySQL vs PostgreSQL

SQL General Features:
1. [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/01-Database Indexes#B-Tree Indexing|B-Tree]] based indexes -> better for reads
2. single leader replication -> no write conflicts
3. configurable isolation levels -> data correctness
	1. gives options for locking, single thread and serializable snapshots

Isolation Differences MySQL vs PostgreSQL
[[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/02-ACID Transactinos#Two Phase Locking - Isolation/Serializability|two phase locking]] vs [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/02-ACID Transactinos#Serializable Snapshot Isolation|Serializable snapshot isolation]]

Every read has locks - transactions read from data snapshots
Read only transactions can grab in shared mode - if transaction reads value which is modified by another transaction before committing, original needs to be rolled back
lots of deadlocks to defect and undo for two phase locking.


Conclusions:
use SQL databases for both data that needs to be normalized and for data that needs to be correct
In theory SSI > 2PL, however if there are a lot of conflicting transactions pessimistic locking(2PL) is way better


## VoltDB
Traditional Relational DBs : MySQL, PostgreSQL
New types of Relational DBs(new SQL): VoltDB, Spanner(googles version)

