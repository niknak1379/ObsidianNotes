---
creation date: 2025-11-24 12:36
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Step Functions

<< ---------------------------------------------------------------- >>

Coordinate multiple AWS services into serverless workflows.

## 2 Types of State Machines:
1. Standrad: 
	1. For durable checkpointed workflows, for machine learning, order fulfillment, it/devops automation, ETL, jobs and other long-distance workloads
2. Express:
	1. Event-driven workflows for streaming data processing, microservices orchestration, IoT data ingestion, mobile backends, and other short duration, high-event-rate workloads.

## Use Cases:
1. Manage a Batch Job or Fargate Container
	1. if the job fails or succeeds, notifies via sns
	2. Run a fargate task, if it failes or succeeds notify via sns
2. Transfer Data Records:
	1. Load up a DynamoDB table.
	2. add each item to the sqs queue
	3. as each item is processed remove the item from the table
	4. where thre are no more records report successfully complete
3. transcoding media files:
	1. trigger lambda to thumbnail, gather metadata etc...
4. send messages/approval requests from automated workflows
5. sequence steps of machine learning workflows 


## States

Parameters: key-value pairs that will be passed as input

Result: a virtual task to be passed to the next stage

ResultPath: where to place the "output" of the virtual task

Task States: respresents a single unit of work performed by a state machine
1. AWS lambda
2. passing parameters to the API actions of other services - SNS, SQS, Fargate, Batch, ECS
3. or using an activity
	1. enables you to have a task in your state machine wehre the work is performed by a worker that can be hosted on anywehre(EC2, ECS, phones)
		1. Activity task state are polled by the workers(its not pushed like the lambda or the other APIs)
4. Choise State
	1. adds branching logic to a state machine
5. Wait State:
	1. delay by a period of time
6. SucceessState
	1. stops an execution successfully
	2. a useful target for choice state branches that dont do anything but stop the execution
7. Fail
	1. stops the execution of the state machine and its failurue and error
8. Parallel States:
	1. expect two states to be performed. The state machine does not move forward until both states complete
9. Map
	1. you can have an array and it will iterate through it and perforom an action
10. pass: 
	1. passes its input to its output, wihtout performing work (useful for constructing and debugging state machines.)

