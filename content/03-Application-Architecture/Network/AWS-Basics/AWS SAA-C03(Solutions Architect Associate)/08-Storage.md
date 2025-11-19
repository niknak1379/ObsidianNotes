---
creation date: 2025-11-18 13:04
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# EBS/EFS

<< ---------------------------------------------------------------- >>
## EBS

IOPS: input/output per second
high IO -> lots of small, fast reads and writes

Throughput: data transfer rate to and from storage medium in MB/s

IOPS vs Throuput:
IOPS measures the number of read and write operations per second, while throughput measures the number of bits read or written per second.

Bandwidth: measurement of the total possible speed of data movement along the network

### Types of Volumes
* General Purpose SSD(gp2) - general usage without specific reqs
* General Purpose SSD (gp3) - 20% lower cost per GB than gp2
* Provisioned IOPS SSD (IO1) - fast input output
* Provisioned IOPS SSD (io2) - mroe durable than io1 - all io2 volumes created after nov 23 are io2 block express, and the ones created before can be converted 
* io2 Block Express - higher throughput and IOPS and support larger storage capacity
* Cold HDD (SC1) - lowest cost HDD for infrequent access
* Throughput Optimized HDD (st1) - Magnetic drive optimized for quick throughput
* Magnetic (Standard) - previous gen HDD

![[Obsidian/Excalidraw/Pasted image 20251118133538.png]]
![[Obsidian/Excalidraw/Pasted image 20251118133854.png]]


### HDD 
#### HDD RAID
Redundant Array of Independent Disks
is a data storage virtual technology for magnetic disks(not magnetic tape) to improve fault tolerance. RAID combines multiple physical volumes into one logical group. Storing redundant data across disks. Since HDD has with mechanical parts and will result in wear HDD is more prone to failure

RAID 0 - Striping
* no redundancy; data is split across disks for high performance.
* increase speed and capacity but offers no fault tolerance
* minimum of 2 disks required
RAID 1 - Mirroring
* Data is duplicated on two or more disks, offering high redundancy
* if one disk fails, data is still accessible from another
* requires at least 2 disks
RAID 5 - Striping with Parity
* combines striping and parity for both speed and data protection
* can withstand the failure of one drive without data loss
* requires at least 3 disks

RAID 6 - Striping with Double Parity
* Raid 5 but with double parity, allowing it to survive the failure of two disks
* requires at least 4 disks
RAID 10 (1+0)
* A combination of RAID 0 and 1, offering redundancy and increased performance
* min 4 disks

## EFS - Elastic File System
file storage service for EC2 instances
you can also mount it to lambda and fargat

## Amazon FSx
a feature rich and highly performant file system. That can be used for windows (SMB) or linux(Lustre)
FSx for window file server: uses SMB and allows you to mount FSx to Windows servers
FSx for Lustre: uses linux's Lustre file system and allows you to mount FSx to linux servers…

FSX for NetApp ONTAP - enterprise storage platform for petabytes of data

FSX for OpenZFS - open source

FSX for WFS(windows file server)
FSX for Lustre

Amazon File Cache
high speed cache for datasets stored anywehre, accelerate cloud bursting workloads. 
Temp high performance sotrage location for data thats stored in S3, AWS file system, on-premises file systems. 

[[03-Application-Architecture/Network/AWS-Basics/AWS CLF-C02(Cloud Practitioner Certification)/08-Storage Services|read the end]]

## AWS Transfer for SFTP
transfer family offers fully managed support for the transfer of files over SFTP, AS2, FTPS, and FTP into and out of s3 and EFS.

MFTW - Transfer family. managed file transfer workflow, fully managed serverless file transfer workflow service to setup run and automate and monitor processing of files uploaded using AWS transfer family. 

## Migration Hub
A single place to discover ur existing servers, plan migrations, and track the status of each application migration

can monitor both application and database migrations

### AWS Discovery Agent: 
agent installed on ur VM of servers to help discover migration servers

### Migration Evaluator Collector
You submit a request to AWS help assess a migration

### AWS migration Hub Refactor
Bridge networking across aws acounts so legacy and new services can communicate while maintain independence of separate accounts. 

### Migration Hub Journey
guided templates for end-to-end migrations.



### AWS Data Sync
Data transfer service that simplifies migration to from and betwen cloud storage services

supports NFS< SMB, HDFS, object sotrage

Works with S3, EFS, FSx, snowcone, Snowball Edge -> to and from google cloud storage, azure etc...

### Amazon AppFlow
Managed integration service for data transfer between data sources. For example between S3 and Google Sheets. 
Its for data transfer beteween SaaS and AWS services. 

Google calender, snapchat ads, zoom, stripe etc...

### AWS AppSync

Query retrieval service, basically [[03-Application-Architecture/Network/graphQL|graphQL]] service

### AWS DMS - Migration Services

Methods:
* Homogenous data migration
	* migrate with native db tooks eg. pg_dump, pg_restore
	* create a migration project in DMS and it use a serverless compute to do it
* instance Replication
	* provision an isntance with chosen instance type to perform replication
* Serverless Replciation
	* must use VPC ednpoints to access AWS services

### AWS Schema Conversion Tool
is a stand alone desktop app that converts your database schema to another database engine.
only on linux and windows. 


