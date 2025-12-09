---
creation date: 2025-12-09 14:55
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

## Aurora

Fully managed relational database Cluster that combines the speed and availability of high-end databases
with the simplicity and cost-effectiveness of open-source databases.
supports both mySQL and postgres compatible engines
1/10th the costs of other solutions and has better performance.

### Scaling
Durability and Fault Tolerance:
backup and failover are handled automatically
snapshots 

Storage is self healing, in that data blocks and disks are coninously scanned for errors and repaired automatically.

Availability:
deploys to minimum 3 availability zones, each contain 2 copies of the data at all times -> 6 copies total. lose up to 2 copies of data without affecting write availability. or 3 without read availability.

### Aurora Provisioned
Aurora Serverless Provisioned is the dfault compute config for aurora clusters.
contains a primary DB instance and optionally up to 15 replicas

manual scaling

### Aurora Serverless V2
fully manages the autoscaling configuration
(does not scale to zero tho)

![[Obsidian/Excalidraw/Pasted image 20251202150303.png]]

### Aurora Global Database
is an Aurora database spanning multiple regions for globel low-latency and high availability.

Has a primary cluster in 1 region.
up to 5 seconday DB clusters in different regions
Writes on primary cluster
replicated to other clusters
only available in specific regions and database versions
