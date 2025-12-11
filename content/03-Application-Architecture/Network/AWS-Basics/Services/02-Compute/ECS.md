---
creation date: 2025-12-09 18:22
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Containers

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