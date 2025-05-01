---
creation date: 2025-04-30 14:38
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Database Replication

<< ---------------------------------------------------------------- >>

Having multiple databases -> 
1. redundant data -> no lost data
2. increased DB throughput (for multiple users)
3. can have them in different geographical locations for better latency. 

## Types of replication:
1. **Synchronous Replication**:
	1. Client writes to the first DB, then the first DB forwards the request to the second DB. 
	2. The write is considered valid once the client gets the confirmation from all DBs. 
	3. **Strong Consistency**
2. **Async Replication**:
	1. Perform the write to the first DB and if recieve a success message consider it successful
	2. The DB will forward the request to the second DB and the client doesnt have to wait to hear back from the second DB to consider it valid. 
	3. means other clients reading from the second DB will receive the old value when the sync hasnt happened yet. 
	4. **Eventual Consistency**

How do we replicate a DB?
1. SQL
	1. take all the SQL statements and copy them into the replications. 
	2. Problems: some statements are non deterministic:
		1. if u use time.Now() it will be different on different DB leading to conflicts
		2. Resolving write conflicts is usually very hard and thus this method is not used
2. Write Ahead Log
	1. It logs what we will write at exact disk or memory addresses (0x0aff "jordan"). 
	2. Not all of our replicas will be running in the same database software -> one could by in mysql other in postgress(postgress is more optimized for reads).
	3. Postgress will not know what to do with that memory address so this will be useless
3. Replication Log(logical log)
	1. At what ID what Value


## Dealing with Stale Reads(eventual Consistency problems)

Strong consistency penalty is too much time and latency which is not ideal. 

**Monotonic Writes:**

If our writes are distributed to multiple replica DBs, since the sync is lagging our reads could look like they are going back in time if we are reading each time from a replica DB that is lagging a certain number of operations. 


Basically read and write only from the same database in a set of DBs. 

**Consistent Prefix Reads:**
partitioning:
splitting the DB into multiple smaller DBs -> each partition will have its own set of replicas.

Some datas might rely on datas that are in other partitions. So if we are reading from one replica that is updated and from another of a partition that isnt yet the order of the data gotten back will be nonsense. 

Causally dependent writes need to be written to the same partition


## Single Leader Replication:
 

