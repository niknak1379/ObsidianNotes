---
creation date: 2025-10-28 14:15
---
#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Benefits

<< ---------------------------------------------------------------- >>

Benefits:
1. agility
2. pay as you go
3. economy of scale
4. global reach
5. security
6. reliability
7. high availability
8. elasticity

## AWS Global Infrastructure

globally distributed hardware and datacenters that are physcially networked together.
* launched regions
* availablity zones
* direct connection locations
* points of presence 
* local zone
* wavelength zones


## Regions: 
	1. geographically distnict locations consiting of one or more availability zones
	2. every region is phsycially isolated(power supply, water supply etc)
	3. each region has three availability zones
	4. cost varies per region
	5. some service are not available in all regions. 

### Regional vs Global services
some services are global like s3, cloudfront, route53, IAM while other like ec2 are regional and have to pick the region from the console or the cli before launching the instance. 

## Availability Zones
is physical location made up of one or more datacenters.
Its common to run workloads in at least 3 AZs to ensure services remain available in case one or two datacenters fail (high Availability)

Each subnet is associated with an AZ

## Fault Domain
A sectin of the network that is vulnerable to damage if a critical device or sysstem fails. The purpose is so that the fall does not cascade outside that domain, limiting the damage possible. 

THere are different fault levels: specific server rack, server room, data center building etc...
AWS abstracts that away but others like Azure dont and u have to pick for example that 2 servers are not run on the same rack. 

## Edge locations
on and off ramps to the AWS global network that connects all aws services globally.

Datacenters that hold caches on the most popular files.

Regional Edge locations: hold much larger caches of less-popular files. 

AWS glboal accelerator, AWS S3 Transfer Acceleration both use edge locations as an on-ramp to quickly reach aws resources in other regions by traversing teh fast aws glboal network. 
Amazon CloudFront(CDN) uses Edge locations as an off-ramp, to provide at the edge storage and compute near the end user. 

## Points of Presence (PoP)

Is an intermediate location between an AWS region and the end user, and this location could be a datacenter or collection of hardware. usually edge locations or regional edge caches

Its usually a data center owned by AWS or a partner used for content delivery or expediated upload. -> edge lcoations, regional edge caches. 

## Direct connect locations
are trusted partnered Datacenters that you can establish a dedicatied high speed, low latency connection from your on premise to AWS

## local zones
datacenters located very close to a densely populated area to provide single-digit milisecondn low latency performance for that area. 

## Wavelength Zones

edge-computing on 5G networks. Apps will have ultra low latency being as close as possible to the user. 

## Data residency
THe phsycial location of where an org or cloud resources reside. 
Compliance boundry: legal requirement by a government that describes where data and cloud resources are allowed to reside. 

Data SovereigntyL jurisdictinonal control or legal authority that can be asserted over data because its physical location is within jurisditional boundaries. 

## GovCloud
FedRAMP is the federal standard for doin stuff on the cloud. 
AWS has isolated region to run FedRAMP workloads. 

## Ground Station:
fully managed service that lets you control staellite communications, process data and scale operations. 

## AWS Outposts:
fully managed service that offers the same aws infra, services and tools to virtaully anywhere. Basically mobile server rack they install wherever u want.

