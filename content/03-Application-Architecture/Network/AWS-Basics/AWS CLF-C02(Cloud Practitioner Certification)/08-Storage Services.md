---
creation date: 2025-10-29 11:07
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Types

<< ---------------------------------------------------------------- >>

3 tyeps:
blocks, files, blob

1. EBS(ELastic Block Store) - Block: data is split into evenly split blocks directly accessed by the operation system supports only a single write volume
2. AWS Elastic File Storage(EFS) - File: File is stored with data and metadata multiple connections via a network share supports multiple reads, writing locks the file. 
3. Amazon Simple Storage Service(S3) - Object: object is stored with data, metadata and unique ID scales with limited no file limit or storage limit. SUpports mutiple reads and writes(no locks)
4. NOT A FILE TYPE BUT: Storage Gateway: a hybrid cloud storage service that extends your on-premise storage to cloud.
	1. file gateway: extends local storage to s3
	2. volume gateway: caches local drives to s3 for a continous backup
	3. tape gateway: stores files onto virtual tapes for backing up youre files on very cost effectve long term storage

## S3
S3 has different classes that trade retrieval time, accessibility and durability for cheaper storage.

1. Default: Fast, 99.99% availability, very durable and is replicated across at least three AZs
2. Intelligent Tiering: Uses ML to analyze object usage and determine the appropriate storage class. Data is moved to the most cost-effective access tier, without any performance impaact or overhead. 
3. Standard-IA (infrequent Access): Still same as standard but for files u access once a month. If more additional fees apply. (50% less availability than standard).
4. One-Zone-IA: still fast but only in one AZ instead of 3. Cheaper than Standard-IA, but data could get destroyed. 
5. S3 Glacier: For long-term cold storage. Retrieval of data can take minutes to hours but the off is very cheap storage. 
6. S3 Glacier Deep Archive: lowest, data retrieval time is 12 hours. 

## AWS Snow Family
Storage and compute devices used to physically move data in or out the cloud when moving data over the internet or private connection it to slow, difficult or costly. 
1. Snowcone - 8tb(HHD) to 14tb (ssd)
2. Snowball Edge - Storage optimized 80tb - compute optimized 39.5 tb
3. Snowmobile - 100PB storage
Data is delivered to S3


## AWS Backup
fully managed back serivce for EC2, EBS, RDS, DynamoDB, EFS, Storage Gateway, you create the backup plans

## CloudEndure Disaster Recovery
Continously replicates youre machines into a low-cost staging area for fast and reliable recovery in case of IT data center failure

## Amazon FSx
a feature reach and highly performant file system. That can be used for windows (SMB) or linux(Lustre)
FSx for window file server: uses SMB and allows you to mount FSx to Windows servers
FSx for Lustre: uses linux's Lustre file system and allows you to mount FSx to linux servers…

