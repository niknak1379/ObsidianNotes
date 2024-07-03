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

## Common EDA Patterns
### 1. Event Notification:
basically the instagram example from before
Pros:
1. high decoupling
2. async task handling
3. increased reliability
4. setting up retry queues
Cons:
1. high decoupling
2. implementation over head
### 2. Event-Carried State Transfer:

### 3.  Event Sourcing

### 4. Command Query Responsibility Segregation(CQRS)