---
creation date: 2025-11-18 13:04
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# EBS

<< ---------------------------------------------------------------- >>

IOPS: input/output per second
high IO -> lots of small, fast reads and writes

Throughput: data transfer rate to and from storage medium in MB/s

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


