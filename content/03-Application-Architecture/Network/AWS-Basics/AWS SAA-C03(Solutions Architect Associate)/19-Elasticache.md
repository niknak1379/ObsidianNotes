---
creation date: 2025-11-25 12:11
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# In memory DB

<< ---------------------------------------------------------------- >>

## ElastiCache
Fully managed in-memory datastore for either open-source data stores Memcached or Redis.

is intended to cache data or HTML fragments to greatly improve response times

it is only accessible by resources in the same VPC to ensure low latency. 

Can be deployed in multiple AZs for high availability or on premise via AWS outposts.

can use RBAC for Redis 6.0 so you manage user access via the AWS management console. 

they have reserve nodes to save money, it can also be used to perform automated backups of data stores.

Has 2 deployment options
serverless and standard. Standard is a EC2 basically and serverless is priced based on how much data you store. 

MemCached is key value store so a lot faster for storing HTML fragments, while Redis has a lot of data structures and can do more complex tasks. 

Memcached is also multithreaded while redis is single threaded. 

## MemoryDB
redis compatible in-memory database for ultra-fast performance - basically managed redis instance with disk backup

Difference with elasticache: 
Has additional persistence guarantees over ElastiCache making MemoryDB suitable as a PRIMARY database. 
- you get slower write but a guarantee of persistence of data.
- writes are slightly slower