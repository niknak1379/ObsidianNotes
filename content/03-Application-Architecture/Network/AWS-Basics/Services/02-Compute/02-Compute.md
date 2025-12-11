---
creation date: 2025-12-05 09:26
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Map Of Content

<< ---------------------------------------------------------------- >>

%% Begin Waypoint %%
- **[[02-Compute]]**
	- [[02-Compute]]
	- [[Batch]]
	- [[EC2]]
	- [[ECS]]
	- [[EKS]]
	- [[Elastic BeanStalk]]
	- [[Labmda]]

%% End Waypoint %%


# Computing

<< ---------------------------------------------------------------- >>
## Main Services
[[03-Application-Architecture/Network/AWS-Basics/Services/02-Compute/EC2|EC2]]:
Backbone of AWS, basically most AWS services also use EC2 underneath. 

Virtual Machines:
Amazon LightSail: friendly version of EC2, you can launch wordpress for example

Containers: ECS (elastic container service), ECR (Elastic Container Registry), ECS Fargate(same as ECS but you pay on demand per running container, with ECS you have to keep an EC2 running even when you have no containers), EKS (Elastic Kubernetes Service) a fully managed Kubernetes service.

Serverless: AWS Lambda


AWS ParallelCluster: AWS supported open source cluster management tool that makes it easy for you to deploy and manage high performance computing(HPC) clusters on AWS. HPC are hundreds to thousands of of servers with fast connections used to boost computer capacity. 

# AWS Auto Scaling

<< ---------------------------------------------------------------- >>

service that can discover scaling resources within your AWS account and quickly add scaling plans to your scaling resources

Can manage and make recommendations for the following scaling resources:
* EC2 Auto Scaling Groups
* ECS EC2
* [[03-Application-Architecture/Network/AWS-Basics/Services/04-Databases/Aurora|Aurora]]
* [[03-Application-Architecture/Network/AWS-Basics/Services/04-Databases/NoSQL-Graph DBs|DynamoDB]]
* Spot Fleet

Can easily apply 
1. dynamic scaling (target tracking)
2. predictive scaling