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

Every read has locks(shared mode for reads and exclusive mode for writes) - transactions read from data snapshots
Read only transactions can grab in shared mode - if transaction reads value which is modified by another transaction before committing, original needs to be rolled back
lots of deadlocks to defect and undo for two phase locking.


Conclusions:
use SQL databases for both data that needs to be normalized and for data that needs to be correct
In theory SSI > 2PL, however if there are a lot of conflicting transactions pessimistic locking(2PL) is way better


## VoltDB
Traditional Relational DBs : MySQL, PostgreSQL
New types of Relational DBs(new SQL): VoltDB, Spanner(googles version)

This is the single threaded Actual Serial Execution DB. 
So no concurrent writes or reads since everything is on a queue and being executed linearly on a single CPU thread. 

Another bottleneck is the disk spead -> since this is an actual DB we move all data to the memory basically like a cache(reddis) but still relational instead of k-v

+:
1. hash indexes for O(1) reads and writes
	1. optional write ahead log, tree set index or a sorted set for faster range queries o(logn)
-:
2. less data per node(memory is expensive) means more partitions
	1. more cross partition reads and writes. ([[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/06-Partitioning#Two Phase Commit - Distributed Transactions|two phase commit]]) which is really slow

How to deal with Network latency:
You can use Stored Procedures(keeping the functions in the DB and only sending the parameters.)

## Spanner
Relational DB
It performs distributed reads a lot more efficiently.

Causally Consistent Distributed reads: if write B depends on write A, and a read contains write B, it must also contain write A. 

Can we solve this problem with snapshots?
Nope since snapshots dont have the ordering of the transactions we cannot make causally consistent reads.
We could use snapshots with transaction numbers but that would be really slow. 

In traditional SQL DBs we use 2 phase locking for this. 
Its slow since grabbing locks take a lot of CPU cycles and also because while the locks are on we cannot do any writes. 
For example if you have an analytical query running it will be locking the entire DB and no one can make any writes. 

What does spanner do?
It does allow us to make causally consistent reads from snapshots, instead of using snapshots based on transaction number it uses timestamps.
This means we dont have to perform any locking. 
Time stamps in ditributed systems are not perfect -> we assign them an uncertainty interval.
Spanner assigns the higher range of the interval + delta of the interval as the timestamp of the transaction and commits it at that time. (it basically waits the amount of the delta and then commits the transaction)

This causes any two writes that have a causal dependancy between them the one that is dependant on the first one has a later timestamp. 

To lower the uncertainty interval of the timestamps(if its too big that means the system will have to wait a longer time to commit the time since the delta gets bigger)The Spanner data centers have GPS clocks which means this will be more expensive.

## MongoDB vs Apache Cassandra

### MongoDB
1. B-Tree indexing
2. Acid transactions
3. single leader replication
4. mongoDB is document Oriented basically a JSON data structure. 

### Cassandra
It uses a Wide column data model
**Wide Column Data Model**:
It stores data in columns instead of rows, unlike relational DBs the names and formats of the columns can vary from row to row in the same table. Google's Bigtable, Apache HBase also use this.

----
You have to have a cluster key and an optional Sort key

Cassandra partitions each row based on the value of its clustering key and that configuration is shared via gossip protocol. It uses the [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/06-Partitioning#Consistent Hashing|hash ring method]]

also a local index with the sort key -> within each partition the values are sorted based on the value of the sort key. 

-----

Cassandra is a very opiniated system: all reads and writes should go to one partition, bc there is very little support for distributed transactions. 

Replication: It uses Leaderless replication and can use quoroums. It is configurable and u can do the reads and writes going only to a single node thing depending on how comfortable we are with eventual consistency and staleness of data. 
It does read repair and anti-entropy, merkle tress etc... or you can do it with strong consistency and quoroum etc...

Write conflict: Cassandra uses last write wins so we could have lost writes so we dont have great data integrity

Riak is an alternative which also gives us the option to use CRDTS.


Cassandra Single Node:
1. LSM tree + SSTables -> better for writes as the LSM tree is in memory before they are flushed in a batch to the tables. 
2. doesnt fully support acid transactions and only supports row level locking -> you might have trouble doing a read modify update transaction on multiple rows. 

Conclusion:
MongoDB -> for when you need the data guarantees of a SQL database but the schema flexibility of a noSQL DB

Cassandra -> Increadibly high single partition write thorughput and read throughput, very poor data guarantees. 

So in the context of a messenger app -> chatID is the cluster key, sort key is timestamp, and it doesnt matter if the occasioanl message is dropped. 
Also for writes it is prefered if they happen only one row at a time and not multiple rows at once, Dont really know why have to back
Cassandra lacks acid transactions and good distributed transaction support


## Hadoop
Distributed Computing Framework:
It is used for
1. Data Storage: uses HDFS(Hadoop Distributed File System)
2. Big Computations: spark, mapReduce

### HDFS(Hadoop Distributed File System)
The storage is rackaware instead of being hardware agnostic(hardware agnostic: it treats all the different hardwares the same), meaning that it knows the locations of the different file systems in order to minimize network latencies. 

It is Fault Tolerant. 

We have One Name Node and multiple Data Nodes.
The name node contains the meta data while the data nodes are for storage. 

The node tells us all the replicas that store a given file and its version. HTFS claims strong consistency so differnet replicas being on different versions shouldnt happen often but are still a possiblity. 

It keeps all the name node data in memory with a write ahead log on disk with all the operations written down. 


#### Reading Files
We read a lot of times and we hope to write a few times since writing is very expensive since we are doing it with very big files in HDFS and on multiple replicas. 

we first ask the name node which node to contact for a specific file, the name node determines which data node is the closest with the least latency to the client and sends that information to the client. Then the client hits up the data node. 

#### Writing Files
When picking the location of replicas the name node tries to do it in a rack aware way. 
So if a client hits up the name node for a write, it determines an order of closeness of the racks to the client and sends a primary, secondary and tertiary DN address to the client for the write to be made to.  

After the write is made to the primary data node, it is then pipelined to the secondary and tertiary DNs by the file system itself with it being called **replication pipeline**

##### Replication Pipeline
you have primary, secondary, tertiary replicas, you write to the primary and it writes to the secondary and pipes it down, with each DN sending an acknowledgement flag to the DN making the write request and the finally the primary making it to the client. 

What if the ACK flag doesnt go back to the client:
If Primary is successful but it fails at the secondary ->
primary has the file but 2, 3 don't. 