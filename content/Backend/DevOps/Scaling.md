#Backend #DevOps
https://www.youtube.com/watch?v=IYhZ6Ic1d8k
## Horizontal 
you basically have multiple instances of the server running,
the requests go through a [[load balancer]] which then decides which instance to redirect the request to. 
1. Statelessness: 
	1. If the request is a [[REST|restful api]] then you have to handle statelessness and **INSTANCE STICKINESS** so if there is a state in the request, the load balancer knows to redirect the requests from the same client to the same instance in the server. 
		1. might be not good - for example if the requests are being done by a web-scrapper this could be a lot of requests and would overload that one instance.
		2. to mitigate could use, session stickiness in combination with a [[Caching|distributed cache]].
2. Loose coupling and Identifying bottlenecks: 
	1. basically know which part of the server needs scaling( is it only the microservices inside of it, the DB that gets callbacked to or the entire instance)
3. Aggressive Auto Scaling, [[Kubernetes]], managed infrastructure.
	1. automatically detect that you need scaling, and kubernetes is good for that, managed infrastructure
4. Scaling Down:
	1. listen for shut down events
## Vertical