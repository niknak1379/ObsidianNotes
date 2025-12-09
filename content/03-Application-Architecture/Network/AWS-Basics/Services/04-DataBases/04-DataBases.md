---
creation date: 2025-12-09 14:36
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[04-DataBases]]**
	- [[04-DataBases]]
	- [[Aurora]]
	- [[NoSQL-Graph DBs]]
	- [[OpenSearch]]
	- [[RDS]]
	- [[RedShift]]

%% End Waypoint %%


#AWS-Basics 

<< ---------------------------------------------------------------- >>

## NoSQL services
Dynamo DB: AWS flagship database service, scales well and is cost effect and very fast. NoSQL key/value and document database. 

DocumentDB: a NoSQL database that is MongoDB compatible. 

Amazon Keyspaces: a fully managed apache Cassandra database, NoSQL key/value database similar to DynamoDB that is columnar and has additional functionality. 

## Relational

RDS: supports multiple SQL engines.

Aurora: a fully managed datase of either MySQL or Postgres, highly available, durable, scalable and secure relational database

Aurora Serverless: is the serverless on-demand version of Aurora

RDS on VMware: allows RDS supported engines to be on-premise data centers.

## Other DB services
Redshift: petabyte size data-warehouse. Data-warehouses aere for onliny analytical processing.(the hole vertical DB and being good for analytical querying) Can be expensive since it keeps a lot of data. Can run long and complex queries. 

ElastiCache: is a managed database of the in-memory and caching open-source databases Redis or Memcached.

Neptune: a managed graph Database. 

Amazon Timestreams: a fully managed time series database. 

Amazon Quantum Ledger Database: fully managed ledger database that provides transparent immutable and cryptograhpically variable transaction logs. To record history of financial activities. 

