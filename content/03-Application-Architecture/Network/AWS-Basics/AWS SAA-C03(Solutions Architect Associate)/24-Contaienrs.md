---
creation date: 2025-12-03 13:34
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

## ECR
fully managed docker container registry that makes it easy for developers to store, manage, and deploy docker container images. 

lets you store docker and open container initiative images (OCI)

Control access via Register Policy
Repo Policy for describe images and repos

Image tag mutability feature is there to prevent image tags from being overwritten

if its on it will apply to all tags.

immutable tags are best practice becuase if there is a security vulnerability with a specific image, you can rollback to previous image or preserve the history of the vulnerabilities. 

## ECS
Elastic Container Service - EC2 instances that run containers

- Cluster
	- multiple EC2 nodes
- Task Definition
	- JSON file that defines the configuration of containers
- Task
	- launches containers defined in task definition
- Service
	- Ensures tasks remain running eg. Web app
- Container Agent
	- Binary on Each EC2 instance which monitors, starts and stops tasks
- ECS Controller/Scheduler
	- responsible for scheduling the deployment and placement of your containers, replace unhealthy containers 
		- you can create your own schedulers or use third party schedulers

## ECS Fargate
serverless orchestration of contaienr service that is managed by AWS.

you pay based on duration and consumption

### Execution Role
is the role used to prepare or manage the container

Permissions:
access to secrets manager or ssm paramter store
Access to download private image form ECR
full access to cloudwatch logs

### Task Role
role used by the running container
common permissions
Access to SSM messages for ECS Exec
Cloudwatch logs full access to log
access to Xray

### ECS Capacity Providers
manage the scale of infrastructure of the tasks in your clusters. 

Each cluster can have one or more capacity providers and an optional capacity provider strategy. 

Fargate has 2: fargate and fargate spot

for ECS EC2 youre basically creating an autoscaling group

### ECS Exec
basically docker exec 


### ECS Service Connect
makes it easy to setup a service mesh for service to service commnication. 
Will deploy a sidecar proxy container eg. Envoy that you can use the service discovery name instead of the IP addresses to talk to other services. 


### ECS Optimized AMIs
come with preconfigured apps like docker

has ECS container agent, os level optimization for containers, also gpu optimized variants. 

### ECS Anywhere
allows you to register external VMs resisindg on premise t oyour ecs cluster. 

## EKS Cloud
Elastic Kubernetes Service a manged service that elimiinates th eneed to install operate and maintain your own kubernetes control plane on aws. 

they can use EC2, fargate and external instances as their compute nodes. 

### EKS Anywhere
is a deployment optoin for EKS to create and operate K8s clusters on premise with your own VMs or bare metal hosts

THey also have the distro they use available if you want to run it on premise. 

### Traces and Spans
a trace is a data/execution path through the system and can be thought of as a directed acyclic graph(DAG) or spans. 

A Span represents a logical unit of work in Jaeger that has an operation name, the start time of the operation, and the duration.

SPans may be nested and ordered to model causal relationships. 

### Open Telemtery
Open source tools, APIs, and SDKs to generate collect and export telemtry data. It standardizes the way telemtery data(metrics, logs and traces) are generated and collected. 

Wire Protocol
Refers to a way of getting data from point to point. Eg. SOAP, AMQP

Basically competes with [[03-Application-Architecture/Network/AWS-Basics/AWS SAA-C03(Solutions Architect Associate)/14-CloudWatch & EventBridge|14-CloudWatch & EventBridge]]

#### Instrumentation
is the act of embedding a monitoring library into your existing application in order to capture monitoring data such as metrics, traces or logging. 


### Collector
is an agent installed on the target machine, or as a dedicated server and is vendor agnostic way to receive, process and export telemetry data. 

### AWS Distro for OpenTelemtery
is a secure prod ready aws supported distribution of OpenTelemetry project. 

### Prometheus
open source systems monitoring and alreting toolkit
collects and stores it smetrics as time series data. 
it is a timeseries database

main features:
1. multi dimensional data model with time series data identified by metric name and key value pairs
2. promQL, a flixible query language to leverage this dimensionality
3. no reliance on distributed storage; single server nodes are autonomous
4. time series collection happens via a pull model over HTTP
5. pushing time series is supported via an intermediary gateway
6. targets are discovered via service discovery or static configuration
7. multiple modes of graphing and dashboarding support

### Amazon Managed Service for Prometheus
is a prometheus compatible monitoring service for container infrastructure and application metrics. 

### Grafana
open source analytics and interactive visualization library that works with prometheus

AWS also has its managed version

