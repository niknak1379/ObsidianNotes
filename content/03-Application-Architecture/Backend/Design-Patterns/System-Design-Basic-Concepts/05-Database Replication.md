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
All writes go to the leader database and that async syncs the follower databases so that they can perform reads. 

Benefits:
1. many copies of data (increased durability)
2. higher read throughput

Failure scenario:
1. follower DB goes down
	1. we have the replication log coming from the leader DB, we can see up until which log the follower has seen and restart it and have the leader send the replication logs that we are missing
2. Leader DB Goes Down
	1. Scenario 1: Leader is up and running but the connection with follower is severed so it thinks the leader is dead
		1. It might want to replace it with a new leader
	2. Scenario 2: Lost Writes: Writes are being propagated Asynchronously so if the database goes down before the async message is sent, the writes will have been received but never propagated to the new leader that will be chosen.  
	3. A leader goes down -> we elect a new leader -> the original leader is back online and we have 2 leaders(split brain)
		1. They will both accept writes and try to propagate them.
		2. We need distributed consensus.
## Multi Leader Replication
different Topologies:
1. Circile Topology:
	1. all the leader nodes are in a circle. 
		1. if one leader goes down the connection between the nodes will be cut and we cant propagate the writes anymore. 
2. Star Topology
	1. One center nodes and then the rest are outer nodes.
	2. Outer nodes send to center and it propagates to the rest. 
	3. If the center goes down none of the databases will communicate with each other and the entire system is down. 
3. All to All Topology
	1. Problems with writes that have causality dependancies. 
		1. So messages that our further than the line can be propagated to some nodes faster than the ones before them. 
		2. How to fix:
			1. Changing the replication log to keep track of which writes have been seen by what nodes. 

### Write Conflicts with Multi Leader Replication

How to fix concurrent writes(writes happening to the same key at the same time):
1. Conflict Avoidance:
	1. All writes to the same key will go to the same replica
		1. will decrease write throughput
2. Last Write Wins:
	1. use the timestamp of the request to the decide which value is written
		1. timestamp of the receiver nodes. Could work if we could rely on the timestamp of the nodes but we cant because:
			1. Quartz Crystal -> clock Skew -> will always be away a few nano seconds depending on weather location etc...
			2. NTP(make a network request to a gloval time server) -> this will introduce latency in the clock system which will make the timestamps to look like they are back in time
3. Distributed Counter
	1. Counter with version vectors. So if 2 users are incrementing the same value they also send their version vector to the DB and the DB can merge the increment operation from the 2 different versions.
		1. When one DB is updated it sends the version vectors to the other one, they diff the versions and see how many writes they need to do to catch up. 
		2. if two of the new version vectors are off by one it means that the two writes are concurrent (the did not know about each other).
		3. once the concurrent writes have been identified we can do multiple things:
			1. make sibling writes
				1. store both writes in the database for the different versions. 
					1. next time a read occurs give the user a choice of which value to keep to resolve the merge conflict
					2. Or have the Database automatically merge them by using CRDTs(Conflict Free Replicated Data Types)
						1. Data types that conflicts for do not make sense such as counters or sets. 
#### CRDTs(Conflict Free Replicated Data Types)
Things that Use this:
Riak, [[03-Application-Architecture/Backend/Frameworks/Redis/Redis|Redis]](can use sets)

##### Operational CRDTS:
You don't send in the vector array which will grow linearly the more database nodes you have, instead you will send an operation(inc(x)) which is just O(1).
Downside: causal relationships will be messy. 

So if you make a request to write sth to a set but then to remove that key from the set but from a different leader, the leader will throw an error. 
So we need a causally consistent messaging broadcast system that does not duplicate messages and is not idempotent(idempotent is when you do the same operation and it will not change after the first time).

##### State Based CRDTS:
This is basically sending the entire counter vector and then merging them example. 
It has to be 
1. commutative(Order of the messages arriving at different leaders does not matter), 
2. associative(no matter what the order of state messages is the end result is the same), 
3. idempotent(if we receive the same state multiple times it will not have an effect)


This means that this system can fire off many state updates and as long as all Nodes get them we will be eventually consistent no matter what

This makes it work really well with the GOSSIP PROTOCOL

**Gossip Protocol**:
Each node will send its update to for example 2 more nodes and all the nodes will repeat that until all the nodes have gotten the state update
It doesn't matter if a node gets the state update more than once since the DB is idempotent. And the order doesnt matter since it is also commutative. 


##### Sequence CRDTs
Build an eventually consistent list -> hard because it depends on the ordering of the elements. 

A lot of real time collaborative text editors use these like google docs, vscode etc...


## Leaderless Replication
instead of writing to one node we will write to multiple nodes and also read from multiple nodes.

What systems use this:
Cassandra, Riak


We add the values with their versions to the database the readers read from multiple DBs and check which DB has the higher version and also send the higher version to the DBs lagging. -> known as **Read Repair**

**Anti-Entropy:**
The Databases do this automatically
You only send writes that you know are not present on the other nodes
How do you know which writes that is?
Either do O(n) linear scan of the entire tables or
#### Merkle Tree
1. make hash of each row
2. sum up pairs of hashes and take a hash of those
3. repeat until you hit a single value

You Traverse and diff the merkle Trees to see what nodes are different and update the leaf node that its hash is different. 

This will be O(logN)


So how do you guarantee that a read is happening from a set of DBs that have been written to? (since none of the DBs selected have the write we cant perform a read repair)
### Quorums
Quorum Reads & writes: 
W = number of DBs we write to
R = number of DBs we read from
N = total DB

when W+R>N we have quorum reads and writes
meaning that there exists at least one DB with the updated value in the Read DBs that we have picked thus we have achieved quorum. 

Do Quorums have strong consistency(all reads will read the latest most updated value)?

Even tho it seems that way, there are a few problems.

Race Conditions:
Different writes will propogate to the Replicas at different rates. 
These could cause all the different DBs to have different values and making it so that quorum is never reached. 

When Writes Fail:
If were writing to multiple DBs and one of them fails that will change the quorum, possibly making the older value be a quorum for some reads. 


Sloppy Quorums:
People will have different DB clusters in different Geo locations.

If a cluster goes down we will have to route the writes to a different Geo location. But when the old cluster will come back online it will be behind. 

Hinted Handoff: the clusters in the other geolocation will hand off the data that the offline cluster is missing to it so that it can be up to date. 

### Conclusion
Quorum will almost resemble strong consistency but still have edge cases so it will not be one.

Leader lass can be good for client side applications like social media apps where it is fine if some data is lost. 

If everyone needs to agree on what the current value is leaderless replication should not be used. 

## Replication Summary
Single Leader Replication
+:
1. no write conflicts
-:
2. Low Write throughput
3. single point of failure

Multi Leader Replications
+:
1. High write throughput
2. good for large geographic area
-:
3. write conflicts

Leaderless Replications
+:
1. relatively high write throughput
2. quorum reads/writes
-:
3. high read latency -> have to read from multiple places
4. write conflicts
