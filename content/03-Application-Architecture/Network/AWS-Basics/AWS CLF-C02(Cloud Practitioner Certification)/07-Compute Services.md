---
creation date: 2025-10-28 20:55
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Computing

<< ---------------------------------------------------------------- >>
Ec2:
Backbone of AWS, basically most AWS services also use EC2 underneath. 

Virtual Machines:
Amazon LightSail: friendly version of EC2, you can launch wordpress for example

Containers: ECS (elastic container service), ECR (Elastic Container Registry), ECS Fargate(same as ECS but you pay on demand per running container, with ECS you have to keep an EC2 running even when you have no containers), EKS (Elastic Kubernetes Service) a fully managed Kubernetes service.

Serverless: AWS Lambda


AWS ParallelCluster: AWS supported open source cluster management took that makes it easy for you to deploy and manage high performance computing(HPC) clusters on AWS. HPC are hundreds to thousands of of servers with fast connections used to boost computer capacity. 



## Cost and Capacity Management Computing Services
1. EC2 Spot Instances, Reserved Instanced and Saving Plans: Ways to save on computing by paying up in full or partially by committing to a ytearly cotracts or by being flexible about availability and interruption to computing service
2. AWS Batch: plans, schedules and executes your batch computing worloads across the full range of AWS Compute services, can utilize spot instance to save money. 
3. AWS Compute Optimizer suggests how to reduce costs and improve performance by using machine learning to analyze your previous usage history. 
4. EC2 Autoscaling Groups: automaticlaly adds or remove EC2 servers to meet the current demand of traffic. Will save you money and meet capacity since you only run the amount of servers you need. 
5. ELB (elastic load balancer): distributes traffic to multiple instances and reroutes traffic from unhealthy isntance to healthy instances. 
6. Elastic Beanstalk: deploy webapps without developers having to setting up underlying AWS services. 


## Elastic Compute Cloud (EC2)

### Instance Families:
1. General Purpose: balance of compute, memory and networking resources, mostly for web servers and code repos.
	1. A1, T2, T3, T3a, T4g, M4, M5, M6, Mac
2. Compute Optimized: ideal for compute bound applications that benefit from high performance processor - scientific modeling, dedicated gaming servers, ad server engines
	1. C5, C4, Cba, C5n, C6
3. Memory Optimized: Fast performance for workloads that process large data sets in memory - in-memory caches, in-memory databases, real time big data analytics
	1. R4, R5, X1, High Memory, Z1d
4. Accelerated Optimized: hardware accelrators or co-processors - machine learning, computational finance, seismic analysis, speech recognition
	1. P2, P3, P4, G3, G4, F1, Inf1, VT1
5. Storage Optimized: high, sequential read and write access to very large data sets on local storage - NoSQL, in-memory or transactional databased, data warehousing
	1. I3, I3en, D2, D3, H1

### Instance Types:
is a particular instance size and instance family combination.
Common sizes: nano, micro, medium, large, 2xLarge, 8xLarge, etc...

### Dedicated Hosts vs Dedicated Instances
Dedicated hosts are single-tenant EC2 instances designed to let you bring your own license based on machine characteristics.

The difference is that a deditaced instance has instance isolation while the host has physical server isolation, you have access to the sockets, cores, hostID etc...

### EC2 Tenancy
Three levels:
1. Dedicated Host: your server lives here and you have control of the physical attributes
2. Dedicated Instance: your servers always lives at a specific spot on a specific server rack
3. Default: your instance is in the same spot until reboot, then it can change.


