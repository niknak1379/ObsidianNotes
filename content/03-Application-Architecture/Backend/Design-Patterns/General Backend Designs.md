#Backend #Design-Patterns
## Backend Function Types
1. [[Reactive]]:
	executes when something is changed, such as when a file is uploaded, or an entry in the DB is updated
2. [[REST|Restful]]:
	Traditional [[REST|restful]] function ran when a request is made to the server

## Folder Structure:

Split file into multiple resource groups (user, login, order, etc...), each resource group will have two folders, [[Reactive]] and [[REST]]ful folders with each file having one function with the name of the function or the name of its *endpoint*. 


## Serverless vs Monolith
https://www.youtube.com/watch?v=90pVRK49AQM

How you do computing for a program:
1. you own the machine
2. you do it on the cloud
	1.  Managed (S3):
	2. [[Serverless]] (Lambda, AWS): 
		1. they give you a URL instead of an IP address
			1. bc by definition ur code is not binded to a server
			2. AWS basically refers the request to whatever server instance their [[Load Balancer]] algorithm determines
			3. you lose a lot of features, sometimes you wont even have access to node
		2. it is slower than serverful, because serverful is always there but this has to run the algorithm 
	3. [[Monolith]] (non-managed server)([[VPC(Virtual Private ClouD)|EC2]]):
		1. has an IP address 
			1. always points to the same machine
		2. you have linux access to the server so you can do anything you want
		3. and you have to reboot if the server crashes or goes down your self, you have to manage everything ur self, ur just basically borrowing actual servers.
		4. you `ssh` into the cloud computer and just deploy as normal


## Monolith vs [[Microservice]]
https://www.youtube.com/watch?v=1A9tPOfp6NA
	[[Monolith]]: One service does everything
		1. Development Experience: 
			1. simplest one
			2. **2:41 for architecture graph**
			3. easiest to run and test locally
		2. Scalability: 
			1. can scale vertically(add memory or cpu to machine)
			2. not great for horizantally scale
		3. Response Time:
			1. lowest latency,
			2. not many hoops for the request to jump through such as [[Load Balancer]]s, etc...
		4. Reliability: 
			1. single point of failure
				1. if process crashes all of it crashes, even if horizontally scaled since all instances are the same they will eventually crash.
		5. Cost:
			1. rent a virtual server([[VPC(Virtual Private ClouD)|EC2]])
			2. fixed pricing
			3. unutilized processing power if not that many users or scaled badly 
	[[Microservice]]: multiple different services
		1. Development Experience:
			1. `7:26` for the graph chart
			2. the [[monolith]] turns into an [[API Gateway]] that just redirects the requests to their [[Microservice]] using an HTTP or a GRPC call. 
			3. you handle the separations using [[Docker]] (Kubernetes and [[Docker]]).
			4. integration tests are hard
			5. Code will be nice and clean, but the infrastructure will be complicated
		2. Scalability:
			1. scale specific services both vertically and horizontally
		3. Response Time:
			1. since there are internal network calls, generally slower
		4. Reliability: 
			1. failures are isolated per service
		5. Cost:
			1. deploy managed Kubernetes clusters(AWS EKS)
			2. Bin packing problem: how to allocate resources to each [[Microservice]] can be hard
	[[Serverless]]: no services, just functions
		1. Development Experience:
			1. no infrostructure - simple code
			2. runtime limitations, like u cant install external libraries
				1. websockets and stuff are a pain
		2. Scalability
			1. scales from 0 to infinity basically
		3. Response Time:
			1. cold starts, initialiazing cost of the server, since serverless
		4. Reliability: 
			1. failures isolated per function so its good
			2. no infrastructure that needs to be managed
		5. Cost:

## Self Contained Systems- SCS
https://www.youtube.com/watch?v=xkQ9VaNTwxM
basically an application that is made up of a lot of different smaller applications, each with their own UI, DB, and microservices, monoliths, etc...
there is redundant data copying since they cant access each others data you just copy it over and keep redundant DBs in the overall system.
Uses AMQP to handle talks between SCSs asynchronously.
kind of like amazon, amazon movies, e-commerce, music, they're all their own thing, and just come together at the end. 

systems are somewhat decoupled and can be scaled independently 