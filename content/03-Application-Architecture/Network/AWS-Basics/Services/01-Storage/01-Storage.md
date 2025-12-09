---
creation date: 2025-12-05 09:05
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[01-Storage]]**
	- [[01-Storage]]
	- [[EBS]]
	- [[File Systems]]
	- [[S3]]

%% End Waypoint %%



# Types:
blocks, files, blob

1. EBS(Elastic Block Store) - Block: data is split into evenly split blocks directly accessed by the operation system supports only a single write volume
2. AWS Elastic File Storage(EFS) - File: File is stored with data and metadata multiple connections via a network share supports multiple reads, writing locks the file. 
3. Amazon Simple Storage Service(S3) - Object: object is stored with data, metadata and unique ID scales with limited no file limit or storage limit. SUpports mutiple reads and writes(no locks)
4. NOT A FILE TYPE BUT: Storage Gateway: a hybrid cloud storage service that extends your on-premise storage to cloud.
	1. file gateway: extends local storage to s3
	2. volume gateway: caches local drives to s3 for a continous backup
	3. tape gateway: stores files onto virtual tapes for backing up youre files on very cost effectve long term storage

# Misc. Storage Tyeps
## AWS Snow Family
Storage and compute devices used to physically move data in or out the cloud when moving data over the internet or private connection it to slow, difficult or costly. 
1. Snowcone - 8tb(HHD) to 14tb (ssd)
2. Snowball Edge - Storage optimized 80tb - compute optimized 39.5 tb
3. Snowmobile - 100PB storage
Data is delivered to S3


## AWS Backup
fully managed back serivce for EC2, EBS, RDS, DynamoDB, EFS, Storage Gateway, you create the backup plans
![[Obsidian/Excalidraw/Pasted image 20251118142504.png]]

## CloudEndure Disaster Recovery
Continously replicates youre machines into a low-cost staging area for fast and reliable recovery in case of IT data center failure

## Amazon FSx
a feature rich and highly performant file system. That can be used for windows (SMB) or linux(Lustre)
FSx for window file server: uses SMB and allows you to mount FSx to Windows servers
FSx for Lustre: uses linux's Lustre file system and allows you to mount FSx to linux servers…

