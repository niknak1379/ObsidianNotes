---
creation date: 2025-10-29 15:28
---
#AWS-Basics 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# App integration

<< ---------------------------------------------------------------- >>

Process of letting two independent applications to communicate and work with each other, commonly facilitated by an intermediate system.

Cloud workloads encourage systems and services to be loosely coupled and so AWS has many service for the specific purpose of application integration. 

The common systems or design patterns utilized for application integraion:
* Queuing
* Streaming
* Pub/Sub
* API Gateways
* State Machine
* Event Bus

## Queuing
Fully managed queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applciations. 
eg. for sending emails or tasks that take a long time but can be done in the background. 
AWS SQS
## Streaming and Kinesis
multiple consumers that react to events. Real time

Amazon Kinesis. 
Streaming is pull based
## Pub/Sub

published and subscribe pattern in messaging systems. 

message sender (publisher) sends to an event bus. the event bus categorizes the message into groups and the reciever subscribe to the groups. 

AWS SNS (simple notification service) -> highly available durable secure and fully managed pub/sub service
pub sub is push based. 

## API Gateway

just a normal API gateway. 

## State Machines
An abstract model that decides how one state moves to another based on a series of conditions(flow chart). 

AWS Step Functions: coordinate multiple aws erivces into a serverless workflow

## Event Bus
EventBridge is a serverless event bus service that is used for application integration by streaming real-time data to your applications

Basically SNS but can do a lot more. 


## list of services
1. SNS - simple notification service - pub/sub to emamil https webhooks, sms, SQS and lambda
2. SQS - simple queue service - send events to a queue - other apps pull the queue for background jobs most commonly
3. Step Functions - State machine Service
4. EventBridge - serverless event bus
5. Kinesis - Stream (basically kafka competitor)
6. Amazon MQ - managed message broker service - uses Apache ActiveMQ
7. Managed Kafka Service(MSK) - fully managed Apache Kafka service
8. API Gateway
9. AppSync - fully managed GraphQL service 



## Container Services

### Primary Services
ECS( Elastic Container Service ) no cold starts, self-managed EC2

AWS Fargate more robust than lambda can scale to zero cost. (does have cold start)

Elasti Kibernetes Service (EKS) - good to avoid vendor lock in.

AWS Lambda - for short running tasks
### Provisioning and Deployment Services

Elastik Beanstalk - ECS on training wheels
App Runner - platform as a service specifially for containers
### Supporting Services
Elastic Container Registry(ECR) - Repos for ur docker images
X-Ray - analyze and debug between microservices

Step Funcitons - stitch together lambdas and ECS tasks(state machine thing)