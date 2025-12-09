---
creation date: 2025-12-09 14:56
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# NoSQL

<< ---------------------------------------------------------------- >>
## DocumentDB
based on mongoDB
stores json like documents. Primary data type is called BSON - binary json - 
has more data types than json, such as date time, bute arrays, regex, md5 binary data, JS code. 

Cluster types:
Instance based clusters: manage your instances directly choosing instance type
Elastic Cluster: clusters automatically scale, you choose vCPU and number of instance per shard
up to 15 replicas

## DynamoDB
Fully managed NoSQL key value and document data base

Multi-region, multi-master, durable database, built-in secuirty, backup and restore, in-memory caching

provides eventual Consistent reads
and strongly consistent reads. 

it also supports automatically paratitoning data as ur database grows. 

Has primary keys -> determine where and how data will be stored in partitions(partition key)
and then sort key

simple primary key - no sorty key
composite primary key - yes sort key

### Scans vs Queries
scans go through all items and then return one or more through filters

by default, returns all attributes for items. Scans can be performed on tables and secondary indexes.
Can return specific attributes by using project Expressions.

Scan operations are sequential, you can speed it up through a parallel scan using segments and total segments parameters. 

## Amazon Keyspaces
fully managed Apache Cassandra database. 

has Clusters which are a collection of nodes. 
all nodes have read and write

[[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/System-Design-Basic-Concepts|System-Design-Basic-Concepts]] somewhere in here

# Graph DBs

<< ---------------------------------------------------------------- >>
## Amazon Neptune
graph database 

highly availble and durable: you can use gremlin sparql or opencypher to interact with it

### amazon Neptune Analytics
extends the database by porviding capabilities to run large-scale graph analytics algorithms efficiently directly on your operational graph dataset. 

### Amazon Neptune ML
use graph neural networks, machine learniing techhnique prupose build for graphs to make easy fast and more accurate predictions using graph data. 

### Types
Provisioned and serverless (does not scale down to zero)

## AWS Gremlin
is a graph traversal language for apache TinkerPop
is a real-time database query or a batch analytics query(OLAP)

### OpenCypher
is the open source implementation of cypher(the graph query language used be Neo4J)

more dev friendly than Gremlin

### SPARQL
resource description framework query language that allows users to write queries against what can loosely be called "key-value" data, or data that follow the RDF specification of the W3C


