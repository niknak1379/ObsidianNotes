---
creation date: 2025-12-09 14:22
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Supported File Systems

<< ---------------------------------------------------------------- >>

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


## AWS Transfer for SFTP
transfer family offers fully managed support for the transfer of files over SFTP, AS2, FTPS, and FTP into and out of [[03-Application-Architecture/Network/AWS-Basics/Services/01-Storage/S3|S3]] and EFS.

MFTW - Transfer family. managed file transfer workflow, fully managed serverless file transfer workflow service to setup run and automate and monitor processing of files uploaded using AWS transfer family. 

## AWS Storage Gateway
connects on-premise software applications with cloud-based storage

is a collection of services:
- File Gateway - allows you to run a gateway within your on-premise environment so you can interact through a SMB or NFS file-system protocol
	- File Gateway to S3
	- File Gateway to FSx - to a windows file server
- Volume Gateway - mount s3 as a local drive using iSCI protocol
	- Cached Volumes - primary data stored on S3 and frequently access filed stored locally
	- Stored Volumes (non Cached) - primary data stored locally and entire data backed up to s3
- Tape Gateway - store files on Virtual Library Tapes for very cost effective long term storage

File gateway: shared folder
Volume Gateway = remote drive
