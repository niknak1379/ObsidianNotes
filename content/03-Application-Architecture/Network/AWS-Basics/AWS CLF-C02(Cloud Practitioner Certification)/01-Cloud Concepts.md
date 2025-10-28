---
creation date: 2025-10-28 12:10
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Cloud computing

<< ---------------------------------------------------------------- >>

practice of using a network of remote servers hosted on hte internet to store, manage and process data, rather than a local server or a personal computer.

## Evolution of cloud hosting
### Dedicated server
Used to have to get a dedicated server for each buisness that runs a single web-app or site. -> very expensive, high maintenance, high security

### Virtual private servers
One physical machine dedicated to a single buisness, but is virtualized into sub-machines that run mjltiple web-apps/sites
Better utilization and isolation of resources

### Shared Hosting
one physical machine shared by hundred of businesses. relies on tenants under-utilizing their resources
very cheap, limited functionality, poor isolation.

### Cloud Hosting
Multiple physical machines that act as one system. The system is abstracted into multiple cloud services -> flexible, scalable, secure, cost effective, high configurability.


## CSP(Cloud service provider)

is a company that 
1. provides multiple cloud services
2. the services can be chained together to create cloud architectures
3. cloud services are accessible via single unified API
4. utilization is metered billing ie per second or usage
5. has rich monitoring built in, eg. AWS Cloudtrail(basically logs all activity)
6. they have an infrastructure as a service (IaaS offering)
7. it also offers automation via infrastructure as cod(IaC)

Ex: AWS, Azure, Google Cloud Platform, Alibaba Cloud

### main types of Cloud services
1. Compute
2. Networking
3. Storage
4. Databases

### Evolution of Computing

Dedicated -> VMs -> Containers -> Functions([[Serverless]])

Types of cloud services:
SaaS(Software as a service) product run and managed by service provider - For Customers

PaaS(Platform as a service) Deployment and management of custom apps. So you dont have to worry about provisioning configuring or 
understanding the hardware or OS. -> Heroku, AWS Elastic Beanstalk

IaaS(infrastructure as service) -> dont worry about IT staff datacenters adn hardware -> for adminstrators. 

## Cloud Deployment Models
1. Public Cloud:
	1. everyting is build on the CSP(cloud service provider) also known as Cloud Native or Cloud First. 
2. Private Cloud:
	1. everything build on companys datacenters or on-premise. 
3. Hybrid Cloud
	1. using a mixture of both. 
4. Cross Cloud
	1. using multiple cloud providers. 

### use cases for the different models:
