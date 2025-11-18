---
creation date: 2025-10-28 20:55
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Computing

<< ---------------------------------------------------------------- >>
## Main Services
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

### AMI(Amazon Machine Image) and Launch Template
You can either create an image or a template(they are different) and spin on the instances from those. The image is the state of the machine
the launch template adds all the EC2 configs, like chip, storage networking etc...



### ASG(Auto Scaling Group)

Always ensure that an instance is running or are scaled.

Have to attach it to a load balancer. 

### Pricing Models
On-Demand, Spot, Reserved, Dedicated

1. On-Demand:
	1. pay as you go. Charged by the second or the hour. 
	2. on-demand is good for workloads that are short-term, spiky, unpredictable. When you have a new app for dev or running an experiment. 
2. Reserved Instances(RI):
	1. For apps with a Steady-state, predictable usage or require reserved capacity. 
	2. A guaranteed commitment to use AWS resources for a period of time -> about 70% saving in price but in a contract. 
	3. Term: contract length could be from 1 to 3 years
	4. Class
		1. Standard: up to 75% saving, can modify Reserved Instance attributes.
		2. Convertible: up to 54% reduced pricing compared to on demand. You can exchange RI based on RI attributes if greater or equal in value. 
	5. Payment option:
		1. all upfront
		2. partial upfront
		3. no upfront
	6. RI Attributes (instance attributes)
		1. are limited based on calss offering and can affect final price
		2. Instance type: m4.large
		3. region
			1. Regional and Zonal RI
			2. Regional: purchase for a zone
				1. does not reserve capacity
				2. usage in any AZ in the region
				3. you can queue purchases for regional RI
				4. instance size flexibility: it applies to instances within the family regardless of size
			3. Zonal: purchase for availability zone
				1. reserves capcity in the specified availability zone
				2. discount only for the availability zone
				3. no instance size flexibility
				4. you can queue purchases
		4. tenancy
		5. platform(windows, linux)
		6. Limits:
			1. per month
				1. you can only do 20 regional per region and 20 zonal per AZ
		7. you can reserve EC2 spots but you will be billed for it even if the machine is not running
		8. You can sell them on the RI marketplace if you are not using the entirety of your commitment. 
3. Spot Instances:
	1. AWS has unused compute capacity that they want to maximize the utility of their idle servers. 
	2. Designed for apps with flexible start andn end times.
	3. AWS batch is an easy and convenient way to use spot pricing. 
4. Dedicated:
	1. Designed to help meet regulatory requirements. When you have strict server-bound licensing that wont support multi-tenancy or cloud deployments you use dedicated hosts.

### Savings Plan
similar discounts to reserved instances but simplifies the purchasing process.

3 types:
1. Compute savings Plan:
	1.automatically apply to EC2 usage 
2. EC2 Instance Savings Plan:
	1. reduces costs on selected isntance family in the region, gives flexibility to change instance within a family in the region
3. SageMaker Savings Plan:
	1. same thing but for SageMaker(ML stuff that uses EC2 under the hood)

