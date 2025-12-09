---
creation date: 2025-12-09 14:49
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Relational Database Services

<< ---------------------------------------------------------------- >>

## RDS
relational database services, managed service for multiple open-source and proprietary relational databases. 

 Supported engines:
 1. mysql
 2. mariaDB(mySQL Open Sourcefork after it got bouth by Oracle)
 3. postgres
 4. oracle
 5. microsoft SQL server
 6. IBM DB2
 7. Aurora

Also supports encryption at rest and in transit

Supports automated backups. and manual snapshots all exported to S3.

When you restore a backup you craete a new RDS instance. 

### DB Subnet Groups
collections of subnets(usually private subnets) that you create in a vpc and that you then designate for your DB instances.  

### Multi-AZ vs Read Replicas
multi az is synchronous while replicas are async
multi-az only database engine on primary instance is active while all read replicas are accessible

multi az has automatic failover to standby when a problem is detected, read replicas have to be manually promoted to a standalone

### RDS Proxy
create a connection pooler so that short-lived AWS lambda functions connecting to RDS do not quickly exhaust all connections. 

PGBouncer does the same thing for postgres.

### Optimized Reads and Writes
Uses NVMIE based ssd block storage instead of AWS EBS for temporary table expressions. 

Queries that use this: sorts, hash aggregations, high-load joins, common table exprssions

only available for specific combination of insance classes and engine versions.
db.r5b + mySQL 8.0
some only allow for optimized reads. 

### IAM Authentication
allows you to authenticate with IAM authentication token to an RDS instance's database instead of using a password

### Kerberos Auth
Kerberos is a network authentication protocol which is also directly integrated into Microsoft Active Directory. 

Kind of like single sign on functionality, works with active directory or on-premises active directory. 

Windows Focused.

### RDS - Secrets Manager Integration
Allows the master password to be rotated out. 
its like a dollar per secret. 
Have to programmatically get the password from SM for the applicaiton

### Master User Account
the intial database account thats created when you provision a new DB instance. 
Has full administrative privileges on the DB.
rec not to directly use it. 

Its set at the time of creation of the RDS instance. You can reset the password if you forget it.

### DB Activity Streams
allows u to control administrator access to data streams to secure both external and itnernal secuirty threats. 

Pushes Activities to an Amazon Kinesis data stream in near real time. Kinesis stream is created automatically
activity streams feature in amazon RDS is free Kinesis is not. 

### Parameter Groups
act as a container for engine configuration values that are applied to one or more DB isntances. 
like max aconnections, max allowe packets etc...

### Public Accessibility
configure public IP address and security groups. 


### Establishing Connections
either if configured through any software that uses the public url

for Private:
Bastion or jumpbox and tunnel through the box, any instance in the same vpc subnet 
sessions manager
use AWS Client VPN
direct connect

### RDS Security Groups
like EC2 security groups, you have to open up the ports to be able to establish a connection.

### RDS Blue Green Deployments
Test database changes in a safe staging environment without affecting the production environment
it copies a production DB environment in a separate synchornized staging environment

### RDS Extended Support
More time to upgrade the engine if you pay more after end of support
