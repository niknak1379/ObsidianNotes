---
creation date: 2025-05-14 17:08
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Caching

<< ---------------------------------------------------------------- >>

[[03-Application-Architecture/Backend/Caching/Caching|Caching]] already talked about it there from sth else more detail here?
## Introduction

Faster reads/writes, prevents expensive and repetetive computations and queries by DB. 

-:
1. Cache Misses are expensive, bc after there is a missed cache there will have to be an additional call to the DB. 
2. Data consistency is complex, depends on how much we care. 

What do we cache
1. DB results
2. Computations done by application servers
3. popular static content


Server-Local Caching:
when the the application server, database nodes, message brokers etc cache the response

Pros:
1. fewer network calls -> very fast
Cons:
2. cache size is proprotional to number of servers. 

Could use consistent hashing(reach the same server, so that the server can cache the data specific to that user)


Global Caching Layer:
Basically have a cache layer in between the application server and the DB with a load balancer in between them that makes sure the application servers use the same cache specific to the user(consistent hashing thing but for caches)
Pros: we can scale it as we need.
Cons: we need to make an extra network call to the LB and the cache

### Conclusion
1. faster storage
2. we can put them physically closer to clients
3. reducing load on other components
we also need to aavoid cache misses and consistency in data.

## Distributed Cache Writes

### Write Around Cache
You literally go around the cache to write to the database
+: database is cerntral source of truth
-: expensive cache miss


Approaches: invalidation vs. stale read
Make an invalidate request to the cache each time a new write to the database is made and ask it to get the new data from the DB. 
Implementing depends on use case wether you care if the data is instantly correct of if stale data is fine. 

### Write Through Cache
You write to the cache and the cache writes to the DB. 

+: data consistency between cache and DB

-: can have correctness issues if not using two phase commit which is a very slow write method. 

Some times you dont need consistent data so you can also just YOLO instead of 2PC. 

### Write Back Cache

Write to the cache first, the cache will do an ASYNC write to the DB. 
They can also lower the pressure on DB by mini batching the writes to it. 

Approaches: Yolo vs distributed locking + replication

pros: lowest latency writes
cons: data staleness/correctness issues. 

Problem: you write to the cache, but until the cache has written to the DB, reads from the DB will be stale -> distributed locking

If the cache fails before it writes to the DB, the DB will never be updated -> cache replication. 

### Conclusion:
Write around: writes like normal, cannot avoid a cache miss -> low compolexity, less read benefit, no write penalty

Write through: super slow with two phase commit, pretty slow without it -> writes much slower, consistent data with no cache miss

Write back: write directly to cache and async send to DB -> writes and reads very fast, can lead to data consistency issues. 

## Cache Evictions
Our main goal is to avoid misses in our cache. 

### FIFO, first in first out

implemented using a queue. Easy to implement
Downside: common queries will not be prioritized. 

### Least Recently Used (LRU)
Preference for removing data that havent been accessed in a long time. 

Implemented by a hashmap + doubly linked list
Doubly linked list so that we can flip the nodes that have been most recently used with their counter part.  

This is commonly used in practice


### Least Frequently Used
Two sets of doubly linked lists with hashmaps each node with a frequency. 

### Conclusion
not really correct answers but def wrong ones(LIFO, random)

### Redis Vs. Memcache

Memcached is more cpmlex, but scales independantly and can be replicated(if you need a lot of cache instances)

#### Memcache
You can do variable number of partitioning using a consistent hashing ring. 

We also have multi threading. 
it uses LRU using doubly linked lists with a hashmap. 

#### Redis
Feature rich: hashmaps, sorted sets, geo indexes, etc...

Fixed number of partitions via gossip protocol.

Write ahead log, and single threaded which allows transactions to be serially executed and have ACID transactions similar to VoltDB. 

Also has Single Leader Replciation. 

### Conclusion
great for enabling replication and independent scaling
redis does much. of the work for you
memcached if you need a lot more customied solutions involving multithreading or leaderless/multileader replication. 


## CDN
Most applications need to serve static content that are very big(media). 

CDNs are geographically distributed caches for static content. 

### Push vs. Pull CDNs
Push: preevmptively populate the CDN with popular content. 

Pull:
Client asks the CDN if it has sth, and if it doesnt the CDN asks the server and then populates its cache. 

CDNs use Datacenter level switches so its connection between the application server is very fast. 

Could have a cache miss tho which is still slow

### Conclusion
+:
1. less load on server
2. faster for users
3. different content in each cache
-:
4. added complexity
5. cache misses


## Object Stores (s3)
How does the CDN store its data 
could use Hadoop.

Unfortunately for storing generalized static content hadoop is very expensive and if you need more space you need to add more nodes(bigger cluster harder to manage)

Since each node has both processing power and storage if youre trying to scale the storage you will have to add an entire node(cpu, gpu) meaning that the disk and computer hardware scale linearly together. You cant independtly scale the disk space without adding more gpus and stuff. 

**This is why Object Stores:**
1. handles scaling for you 
2. handles replication for you
3. cheaper to run than a hadoop cluster. 

### Data Lake Paradigm 
Schemaless storage of data to store multiple different types of files in the same store

### batch jobs
Ton of storage but not much compute. 
Companies want to dump their data in a lake, and process it later. 
Object stores lack the proccess power, so need to transport the data to a Hadoop cluster or sth else. 

This will be slow since it is over the network. 

As long as the batch job gets done before its deadline the network latency doesnt matter

