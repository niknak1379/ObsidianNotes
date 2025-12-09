---
creation date: 2025-12-09 14:36
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# OLAP

<< ---------------------------------------------------------------- >>

## Amazon Redshift
fully managed Petabyte-size data warehouse. You can run SQL queries on massive amounts of data in columnar store databases.

Its good for analytics and generating reports. 

It uses OLAP - online analytics processing system

Red shift uses Massively Parallel Processing (MPP). it automatically distributes data and query loads across all nodes. 

Lets you easily add new nodes to your data warehouse while still maintaining fast query performance. 

Supports backups. tries to keep 3 copies of your data
1. original copy
2. replica on the compute nodes
3. backup copy in s3

Redshift is SINGLE-AZ. 

![[Obsidian/Excalidraw/Pasted image 20251201134229.png]]

