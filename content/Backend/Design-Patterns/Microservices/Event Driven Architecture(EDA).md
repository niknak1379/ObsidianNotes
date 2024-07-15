#Backend #Design-Patterns #Microservices
## Intro :
It is basically **Publish Subscribe Pattern**:
you have one publisher and one or more [[Microservice|micro-services]] that are subscribed to the publisher

publisher does not need to have a knowledge of the subscribers

basically the observer that the publisher publishes to is a Queue and the subscribers just consume that queue
if no EDA the publisher would have to contact other services directly and wait for a response to each one and then contact the next one. 

every time a service consumes an event from the Event broker, it send back an Acknowledgement(ACK) back to the queue that the event can be deleted from the Q now. 

PROS: since everything is decoupled and subscribers are listening for events and dont know about the existence of the publisher, each micro service can be scaled appropriately. and events will be consumed as soon as possible. 

Use Cases:
1. real time notification
	comparison: instagram like counter.
		1. in the older model, the app pulls the like counter from the server every 5 seconds
			1. adds too much processing burden to the phone or device
		2. subscribe to a specific **Topic** and the server Async loads the events into the Topic and the app just consumes it. basically like [[Web-sockets]].
2. live chat
3. Distributed Logging
4. Distributed Caching
5. Multiplayer games


#### Task vs. Events
Task knows what will happen once it is consumed
Event is just a distributed message and does not know of its subscribers 

## Common EDA Patterns
### 1. Event Notification:
you use #RabbitMQ for this.

basically the instagram example from before
events that never get consumed end up in the **Dead Letter Queue**n.
Pros:
1. high decoupling(scaling)
2. async task handling
3. increased reliability
4. setting up retry queues
Cons:
1. high decoupling(the publisher will never know if the even has been consumed)
2. implementation over head
### 2. Event-Carried State Transfer:
the only difference with event notification is the data we include in the Event
you basically send both the old and new state(values of whatever is being transfered).
In ***1*** you only do the new state.
### 3.  Event Sourcing
use #kafka-streaming for this. mainly used in #FinTech
Some examples in the [[Microservice|micro-services]] page for how to handle [[Database|data-bases]].
basically have a database that captures the events.

Pros:
1. it uses the event-carried state transfer, so you always have a snapshot or log of everything that has happened.
2. audit log
3. temporal queries that show the state of sth at any point in time
Cons:
1. hard to [[Querying|query]] the data base. since you have to rebuild everything to access the state that you want. **CQRS** solves this problem

### 4. Command Query Responsibility Segregation(CQRS)
Some examples in the [[Microservice|micro-services]] page for how to handle [[Database|data-bases]].

Basically having different DBs for reads and writes and scaling them separately([[Read Replica]])

Still have to make sure that the two databases match and are synchronized
1. write into all DBs
2. set up a Sync job between them
However these all take time, so you do not have instantaneous consistency but **Eventual Consistency**.  **but thats not viable for an event driven architecture**

How it Works:
you have to separate event stream DBs one for writes and one for reads. Kafka can also publish the events and store them, so you have a service that is subscribed to the write event stream, and each time the write event stream, publishes, the Upstream Service(which can also act as a message broker) updates the read stream DB. 

The read DB also has a materialized view- so you dont have to go through all the events if you want to like get the sum or the average of all the states that are logged in the DB, the materialized view can be refreshed using SQL everytime the DB is updated. 


Pros:
1. independant scaling for read and write
2. optimized data schemas, write and read sides can use schemas optimized for update or query
Cons:
1. eventually consistant, thus has to be a non critical service.
	1. its fine if ur shopping cart doesnt match what u see, its not if its a selfdriving car doing sth
2. more databases so more costs
3. data synchronization adds a separate layer of complexity. 