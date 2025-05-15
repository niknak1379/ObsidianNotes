---
creation date: 2025-05-06 18:58
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Database Platforms

<< ---------------------------------------------------------------- >>
## Relational vs. Non-relational DBs
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

## MySQL vs PostgreSQL

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
primary has the file but 2, 3 don't. And thus we will have replicas that our out of date(version) and thus the system will not be strongly consistent. 

It can either try again to get an ack or be ok with eventual consistency. 

#### High Availability HDFS
The name node is a single point of failure, and if it went down there would be no other way to oragnize reads and writes. 
Used to have secondary name nodes as a backup but
now it uses Zookeeper which is a strongly consistent distributed log via consensus.

Primary NN would send its logs to zookeepr ->
This allows us to have linearizable storage with the write ahead log of the Name node becoming the distributed logs of the zookeeper. -> secondary name node being state machine replication -> read everything from the WAL and store it in memory so that if any of the zookeeper services go down, it can act as a secondary name node.

#### Conclusion
fundamental building block for a lot of distributed system. A lot of databases that will be following in the notes will be built on top of hadoop or big data processing done on hadoop.

## HBase
A database build on top of Hadoop :)

1. allows for quick writes/key updates(even though hadoop is very slow on writes)
	1. via LSM Trees
2. Allows for good batch processing abilities due to data locality
	1. via column oriented storage
	2. via range based partitioning. 

Wide Key Column Store like cassandra
- it doesnt have a dedicated cluster key like cassandra bc of range based partitioning
### Architecture:
Master Node(name node) that keeps all the metadata with what nodes have what data and what version. 
Then there are also Region Nodes that will run on top of the HDFS Data Nodes. With the Region Node being a separate process from the HDFS running in memory.

The master node will also have a zookeeper system running as a backup that can then have a secondary master node come online and read all the stuff from the zookeeper and replace the master node. 

So our writes would be sent to a specific region node:
The region node is operating the LSM tree index. Then the LSM tree is flushed into the SSTable resisding on the HDD of the data node of the HDFS. which then will trigger the Replication pipeline. 
Hbase also manages partitioning with each different region node being a different partition with its own LSM tree and SSTables. 

#### Column Oriented Storage
We put all the rows next to each other in column format:
![[Obsidian/Excalidraw/Pasted image 20250509145906.png]]
+: Range based partitioning keeps related data close to one another. 

#### Conclusion:
Not as good as Cassandra for a typical application level database in terms of speed, however if you want to be able to store and **Modify** big data on HDFS so that you can run analytical batch queries, HBase is very good.


## MapReduce
A part of the Hadoop Distributed Computing Environment that allows us to do batch computation on data on Hadoop and already stored in HDFS. 

Advantages:
1. instead of running a massive SQL pipeline we can run arbitrary code, just have to define a mapper and reducer function
2. run computations on the same nodes that hold the data(data locality)
3. Failed mappers or reducers are restarted independently(basically is a very resilient system, if only a part of the function fails, you dont have to restart the entire job, just the mapper or reducer that failed so good on servers that are also busy with other tasks)

Mapper: Object -> (key, value)
Reducer: key, list(value) -> (key, value)

### MapReduce Architecture
1. All the Data on the different nodes of the disk goes through the Mapper function to become (k, v)
2. We take the hashes of the key and send it to the proper node determined by its hash(and % of number of reducer tasks) which allows us to make it into a sorted list and to do a merge join in O(n)
3. data flushed by hashing is put in a buffer, when the buffer hits the limit it is spilled to disk, which are sorted in each node. Then the spill files are merged before sending the data to the reducer
4. Run the reducer on all the same key pairs. The reducer itself also sorts the multiple merged spill files that it recieves from each mapper into a sorted stream.
5. Materialize -> store the reduced data back to the disk on HDFS.

Why Sort: so that you know when the reducer function hits the end of a key so that you dont have to keep the function and its values in memory. This would create a lot of overhead on large datasets. 

#### Job Chaining
You can also just chain map reducers. 

#### Conclusion:
very useful framework for performing big batch computations on a schedule. You can even perform more advanced calculation by job chaining and data joins. However map reduce has some major performance flaws as well and in reality isnt usually the best tool for the job. 

## Data Joins
During batch computation we want to join multiple datasets:
This is difficult since a lot of data is involved and there will be lots of data that has to be shifted over the hard drives and network so that our joins are optimized.

### Sort Merge Join
You have 2 data sets. Perform Sort on every single Node.
Then we will perform the shuffle step which is basically similar to the shuffle step of MapReducer where we hash the keys and send the data to the appropriate partition based on the hash. Then we can just run the O(n) merge algorithm on the sorted lists

1. Can always be used because we can always re-partition by our join key, the merging can be done entirely on disk -> no memory constraints
2. can be EXTREMELY slow
	1. have to sort all our data by join key(unless already indexed)
	2. Have to send at least one whole dataset over the network, possibly both depending on how they are partitioned. 

### Broadcast Hash Join:
Joining a small data set (one that can fit entirely in memory) with a big dataset. 

Every single node of the bid dataset can be sent the small dataset over the network(not big deal since its small)

The only thing you have to do is a linear scan of the hashes to see if the small dataset keys are in the dataset for there to be a join operation or not. You dont have to sort the big dataset so its a lot faster. 

### Partition Hash Join
Both datasets are too big for memory but they are partitioned in the same way so that the partitions can fit in memory. 

Then you can repeat the steps of broadcast hash join. 

## Apache Spark
Why [[#MapReduce]] Sucks?
1. chained jobs dont know about one another
	1. lots of waiting since the chained jobs have to wait for all portions of the mapreduce to finish
2. Each job requires a mapper and a reducer
	1. After the first mapper you usually dont need another mapper
	2. each mapper also sorts the input which is very costly -> O(nlogn)
3. Tons of disk usage
	1. jobs materialize intermediate state so it uses a lot of disk space

Spark Job:
Only writes to disk on input and output. 
Every single function(mapper or reducer) is expressed as an operator -> they can contain arbitrary code and do anything.(while mapreduce requires concrete mapper sorter shuffler and reducer). 

Spark puts the intermediate data in an RDD(resilient distributed dataset) which is in memory -> we dont write to disk like mapreduce which makes it a lot faster. 
Its also aware of the entire object computation graph for a query so it can go ahead and start the computations as soon as all the data is available so it doesnt wait for all the steps to finish before it starts the next steps. -> its a lot faster

Since everything happens in memory -> what happens if there is a failure in the middle of the job?

### Spark Fault Tolerance: Narrow Dependency
All computation stays on one node between two steps of the spark job.
All the computational steps can be performed on any given machine so we will paralellize it -> split it up the work of the offline node between the remaining nodes. 

### Wide Dependency
Unlike narrow this means that the data is going to be on multiple nodes for the next step of the computation
And since everything is in memory if sth goes down its previous step will not bee known for the other nodes to recompute the down nodes computation.

Whenever spark sees a wide dependency or finishes one -> it writes to disk

### Conclusion
Much faster than MapReduce
nodes do computations as soon as possible
intermediate state kept in memory
no need to sort at every step

uses more memory than mapReduce and needs to fit dataset in memory


## Time Series Databases
Great for handling time series data: logs, metrics, sensor readings, etc...

Popular Implementations: **TimeScale DB, InfluxDB, Druid**

They use column oriented storage, better locality, caching etc... good for analytical workflow. 

**Optimizing Reads using Chunk Tables**:
Were usually paramitizing our data by time range and source, each 2D range will be a chunk. 

Each chunk table will maintain its own index
and use LSM + SStable to store the data. 

Optimizing Deletes:
in a normal [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/01-Database Indexes#LSM Tree + SSTable Database Indexing|01-Database Indexes]] deleting is as inefficient as writing. In chunking tables, some data will be too old and we want to get rid of it. We just Drop the chunk table and write over whatever was in it, instead of going through the normal SStable delete propogation. 

## Graph Databases

Anything best represented by nodes and edges. 

### Native vs Non-Native Graph DBs
non-native takes an existing non graph database and writes a query language on top of it so u can perform graph traversals. 

In a relation DB:
This will take a lot of time, as the query has to binary search the DB to find the desired node and then binary search its edges to find the desired relationship in the query. O(logn + loge)

in a Non-relational DB:
Slightly better at Ologn since you have everything in one table and dont need to go to a different table to find the relationships. 

Native/Neo4j implementaion

we have a Nodes and Edges table with each row having an address(disk)

The Nodes table will have the disk address field Name(value) field and then the Edge address field which points to the address the edge is stored in the edges table

The edges table will have an addres field, a point to field(which node the edge points to) and then a next edge address field in case a node has multiple edges. 

ACID transaction in Neo4j:
WAL, locking, 2PC on distributed systems.
## GeoSpatial Indexes

Example: yelp, uber, tinder etc... use this.
for DBs when youo need find all points within some distance. 

### GeoHashes/Quadtrees

Assign every 2d point a single value so that similar values are close to one another. 

This allows us to just sort the points and getting other points close to our coordinates will basically be like a binary search to get the points close to the query. 

And then you can run a distance calculation to see if the hashed points are acceptably close to each other or not

### GeoSharding
There is too much data for just one computer. 
So Geo sharding we will shard geographically. 