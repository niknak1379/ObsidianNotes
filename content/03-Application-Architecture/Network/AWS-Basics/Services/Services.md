---
creation date: 2025-12-05 09:04
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[Services]]**
	- **[[01-Storage]]**
	- **[[02-Compute]]**
	- **[[03-Networking]]**
	- **[[04-Databases]]**
	- **[[05-Frameworks]]**
	- **[[06-Event and Stream Processing]]**
	- **[[07-Logging]]**
	- **[[09-Secuirty & Management]]**
	- [[Migration Services]]
	- [[Miscellaneous Services]]
	- [[ML Services]]
	- [[Services]]

%% End Waypoint %%


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
1. Cloud: Companies starting out today or are small enough to make the leap from a VPS to a CSP
	1. Startups
	2. SaaS offerings
	3. New Projects and Companies
2. Hybrid: started with its own datacenters, cant fully move to the cloud due to effort of full migration or security compliance
	1. banks
	2. fintech
	3. legacy on-premise
3. on-premise: cannot run on cloud due to strict regulatory compliance or sheer size of the org
	1. public sector
	2. Hospitals or sensitive data
	3. heavy regulated industries

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
	1. every region is phsycially isolated(power supply, water supply etc)
	2. each region has three availability zones
	3. cost varies per region
	4. some service are not available in all regions. 

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

# Cloud Architecture

<< ---------------------------------------------------------------- >>
## Solutions Architect:
A role that architects a technical solution using multiple systems via reasearch, documentation, experimentation.

## Cloud Architect
A solutions architect that is focused solely on architecting technical solutions using cloud services. 
you have to know about:
1. availability -> elastic load balancer in instances applied in different availability zones
2. scalability 
3. elasticity -> ability to automatically scale. Uses ASG Auto Scaling Groups(automatically add or remove servers based on scaling rules you define based on metrics)
4. fault tolerance -> no single point of failure -> RDS multi-AZ (multiple copies for failovers)
5. disaster recovery(high durabilty) -> CloudEndure Disaster Recovery continously replicates the machine into a low cost staging area. 
	1. BCP(buisness conintuity plan) a document that outlines how a buisness will continue operating during an unplanned disruption in services.
		1. RTO - recover time objective - how much time u can have down after disaster
		2. RPO - maximum acceptable amount of time since the last data recovery point.
		3. Options:
			1. Backup and restore
			2. pilot light(data replicated to a different region with minimal services to be able to replicate)
			3. warm standby
			4. multi-site active/active
6. security
7. cost



# Shared Responsibility Model

<< ---------------------------------------------------------------- >>
Is a cloud secuirty framework that defines the secuirty obligations of the customer versa the cloud service Provider.

Customers are resonponsible for secuirty IN the cloud
AWS is responsible for the security OF the cloud

Types of Cloud Computing Responsibility:
On premise: you are for everything
Iaas: OS and up are for you virtualization down for AWS
PaaS(platform) youre only responsible for data and application, AWS is for Runtime to the bottom
SaaS: AWS is for everything.


# Well Architected Framework

<< ---------------------------------------------------------------- >>
### White Paper
White paper created by AWS to help customers build using best-practices defined by aws. 

the frame work has 5 sections:

1. Operational Excellence
	1. Run and monitor systems
	2. Design Principles:
		1. Perform operations as code
		2. make frequent small reversible changes
		3. refine operations procedures frequently
		4. Anticipate failure
		5. Learn from all operational failures
2. Security
	1. Protect data and systems, mitigate risk
	2. Design Principles:
		1. Implement a strong identity foundation
		2. Enable traceability
		3. apply secuiurty at all layers
		4. Automate secuirty best practices
		5. protect data in transt and at rest
		6. keep people away from data
		7. prepare for secuirty events.
3. Reliability
	1. Mitigate and recover from disruptions
	2. Design Principles:
		1. Automatically recover from failures
		2. Test recovery procedures
		3. Scale horizontally to increase aggregate system availability
		4. stop guessing capacity
		5. manage change in automation
4. Performance Efficiency
	1. Use computing resouces effectively
	2. Design Principles:
		1. democratize advance techologies
			1. use already available cloud tech that is cheap instead of setting up ur own so u can focus on procurement
		2. Go global in minutes
		3. use serverless architectures
		4. experiment more often
		5. consider mechanical sympathy
5. Cost Optimization
	1. Get the lowest price.
	2. Design Principles:
		1. implement cloud financial management
		2. adopt a consumption model
		3. measure overall efficiency 
		4. stop spending money on undifferentiated heavy lifting
		5. Analyze and attribute expenditure. 

How each pillar is organized:
1. Design Princples: list of design principles that need to be considred during implementation
2. Defenition: overview of the best practice category
3. Best Practices: detailed information about each best practice with AWS service
4. Resources: additional documentation, whitepapers, and video to implement this pillar. 

## Team organiztion
Usual on-premise enterprise:
Centralized team consist of techinical architect, solution architect
data architect, netwroking architect, security architect
Managed by either TOGAF or Zachman Framework
AWS proposed:
Distributed teams consisting of Practices(team experts who raise the bar), Mechanisms(automated checks for standards), Amazon Leadership Principles. 
Supported by a community of SMEs, and principle Engineers. 


### Amazon Leadership Principles
1. Customer Obsession
2. Ownership
3. invent and simplify
4. Are right, a lot
5. Learn and be Curious
6. Hire and Develop the Best
7. Insist on the highest Standards
8. Think big
9. Bias for action
10. Frugality
11. Earn Trust
12. Dive Deep
13. Have backbone; disagree and commit
14. Deliver results
15. Strive to be Earth's best Employer
16. Success and scale bring broad responsibility


### General Design Principles
1. Stop guessing your capacity needs
	1. cloud computing can be scaled on demand
2. Test systems at production scale
	1. clone production env to testing, tear down testing not in use to save money
3. Automate to make architectural experimentation easier
	1. cloudformation, stackjpdates
4. Allow for evolutionary architectures
	1. Ci/CD, rapid or nightly releases, 
5. Drive architectures using data
	1. cloudwatch, cloud trail
6. Improve through game days
	1. simulate traffic on production or purposely kill EC2 instances to see test recovery.

### AWS Well-Architected Tool
Is an auditing tool to be used to asset your cloud workloads for alignment with the AWS well architected framework

### AWS Architecture Center
a web portal that contains best practices and reference architectures. 

# TCO & Migration

<< ---------------------------------------------------------------- >>


## TCO - Total Cost of Ownership

TCO is a financial estimate intended to help buyers and owners determine the direct and indirect costs of a product or service.  


## CAPEX vs OPEX
Spending money upfront on physical infrastructure is **Capital Expenditure - CAPEX**, some can be deducted from tax bill over time

Operational Expenditure(OPEX) - customer only has non-physical costs, you dont have to do any upfront spending. 


## AWS Pricing Calculator
calculator.aws u just get a cost estimate. 

### Migration Evaluator
Estimate tool used to determine an organization exisiting on-premise cost so it can compare it against AWS costs for planned cloud migration


Theres also migration tools both for VMs into EC2 instances and DBs.

## AWS Cloud Adoption Framework
a whitepaper to help you plan migration from on premise to AWS
has 6 focus areas:
1. buisiness perspective
2. people perspective
3. governance perspective
4. platform perspective
5. security perspective
6. Operations Perspective

Its basically a detailed guide on how to update the skills of each sector that has to deal with one of these. 

### AWS Support Plans
1. Basic
	1. Email support only for billing and account 
	2. 7 trusted advisor checks
	3. free
2. Develop
	1. Tech support via Email ~24 hours until reply
	2. no third party support
	3. General Guidance < 24 hours
	4. system Impaired < 12 hours
	5. 29 per month
3. Business
	1. Tech support via chat, phone 24/7
	2. Production system impaired < 4 hours
	3. Production system Down < 1 hr
	4. all trusted advisor checks
	5. 100 per month
4. Enterprise
	1. Business Critical System Down < 15m
	2. Personal Concierge
	3. TAM - technical Account manager
	4. 15000 per month

#### Technical Account Manager
provides both proactive guidance and reactive support. 

## Service Level Agreements
SLA: a formal commitment of expected levels of service between a customer and provider that can mean financial or credit compensation if the service is not met

SLI - service level indicator: indicates measure of performance 

SLO - Service level Objective: as a target percentage what objectives the provider has met over a period of time(availability, etc...)


# API Intro

<< ---------------------------------------------------------------- >>

### Smithy
Smithy 2.0 is AWS's open-source interface Definition Language for web services

It is a language for defining services and SDKs.

Forces you to define your interface first rather than let your API to become implicitly defined by your implementation choices.


### Service Endpoints
AWS uses 4 types
1. global - for global services
2. regional endpoints - for regional services 
3. FIPS endpoints - for enterprise use
4. Dualstack endpoints - Ipv4/6
