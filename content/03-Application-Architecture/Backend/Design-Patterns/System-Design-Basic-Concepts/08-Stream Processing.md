---
creation date: 2025-05-12 13:59
---
#03-Application-Architecture #Backend #Design-Patterns #System-Design-Basic-Concepts

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`


<< ---------------------------------------------------------------- >>

# Stream Processing(real time event processing)
??[[03-Application-Architecture/Backend/Design-Patterns/Microservices/Event Driven Architecture(EDA)|Event Driven Architecture(EDA)]] for more explanations?
What if we want to react in real time to events -> pass in event in real time to react to.

Producer generates events that are consumed by the consumer.  

If we the Producers and Consumers are directly connected with TCP connections there will be n^2 connections which is expensive so you have to use a event/message broker for some systems which is O(n) connections.

**Common Stream Processing use cases**:
1. Metric/long time(grouping and bucketing events)
	1. Tumbling windows: non overlapping intervals that start and end at a fixed time size and we can use this to bucket the events
	2. Hopping window: they can overlap with one another.
		1. you can just aggregate the tumbling windows that make the hopping window to get its values. 
	3. Sliding Window:
		1. for example last 5 minutes window: you have a queue for events and you just add it to the back of the queue with another thread removing the data when it hits more than 5 minutes. 
2. change data capture
	1. A lot of times we write to a DB and we have a second storage that we want to keep in line with the database that uses some other piece like derived data such as a search index. 
	2. The DB sends the event to a broker which then processes it
		1. you dont want to use sth like a two phase commit since an event broker is a lot easier. 
3. event sourcing
	1. Very similar to change data capture.
	2. The client sends the event directly to the broker which then sends it to the consumer and the consumer sends the processed event to the DB to be properly written. 
	3. Whats the advantage?
		1. here these are events and not writes. (DB agnostic events VS. change data capture which are not)
**Exactly Once Message Processing:**
Fault tolerant brokers -> some disk persistance and replication, consumer acknowledgements, No more than Once Processing(two phase commit or idompotence(processing the message more than once is the same as processing once)). 

## Kafka Vs. RabbitMQ
1. In memory message brokers: rabbitMQ, ActiveMQ, Amazon SQS
	1. You have a queue of messages that are sent to the consumer and after they are sent are taken out the queue temporarily once sent and then deleted once the acknowledgement from the consumer of processing is received. 
	2. Results in a Round robin delivery(once a message is sent the one after it in the queue is immediately available to be sent to a different consumer) -> leads to more throughput but also possible out of order processing(if we want in order processing we need to **fan-out**:have a dedicated queue for each consumer).
	3. Poor fault tolerance and no replayability
2. Log based Message brokers: Kafka, amazon Kinesis
	1. sequential writes on disk
	2. all consumers reading from a queue get every message in order(it keeps track of which message each consumer has consumed and just feeds the next one to them without deleting any messages), one slow to process message slows process of the rest -> need to partition to increase througput 
	3. More durability, messages not deleted since on disk and can be replayed later. 
### Conclusion:
In memory:
1. want maximum throughput, order of event processing doesnt matter
	1. posting videos to youtube and they want to encode them
	2. users posting tweets that will be sent to news feed caches of followers. 
Log Based:
2. Want all items in queue to be handled by one consumer, in order, ability to replay
	1. sensor metrics coming in, we want to take the average of the last 20
	2. each write from a database that we will put in a search index(changed data capture)

## Stream Processing Joins(stream enrichment)
Basically you take an event and add information to it from other events. 

### Stream-Stream Joins
We match events from two streams. 
Example:
one source produces search terms, a second one publishes the link clicked in a webbrowser
We want average number of search terms per click for exmaple and this would be a join

Arbtrary amount of time that an event is valid and the event is held in the stream for that long. 

We basically cache the results of our stream in our consumer and hold on to them and join them as new events come in. 

### Stream-Table joins
Naive Way: the consumer queries the DB everytime there is a new event so that it can join them together. The query has to be done over the network which is very slow so not a good solution. 

Good way: use Change Data Capture: DB sends its event to the consumer of the first stream and that does a join. 

### Table-Table Joins
Maybe you need an analytical query over time and polling the DB every 5 seconds to do a join on a big table is very inefficient. Turning this into a stream is thus much faster and efficient. -> not real time, massive query takes time. 


Do change data capture on both DBs and send them as a stream to the message broker and have a consumer make the join on them.

### Patterns:
in order to maximize performance cache derived state in memory. -> keep a hashmap in mem and perform a hash join

Issue 1: memory -> less space per consumer -> we might have to partition our event queues and have different conusmers for each partition

Issue 2: memory -> consumer state is not fault tolerant -> having a write ahead log isnt enough(multiple partitions so even if a partition becomes back online, other consumers can process more messages and much farther ahead making the system become inconsistent.)

The solution: stream processing frameworks like flink

## Apache Flink
If you wanna join 2 streams -> 
cache all the events, put them in a hashmap and then do a hashjoin and put the results in a sinkqueue

How do we make sure all our consumers are fault tolerant?

Examples of frameworks: Flink(per event), spark streaming(microbatching), tex, storm

Flink allows us to guarantee that each message only affects the state once

These are not message brokers, they(flink, etc...) are consumers. 

**Why is fault tolerance hard:**
Example: if a consumer consumes the event puts it into the sink queue but goes down immediately without sending on ACK to the producer to delete the event. The next replacement consumer will consume this event again and we will have 2 replicas in the sink queue. 

**How does Flink guarantee that an event is consumed at least once and only once?**

It does it via Checkpointing:

It does require replayable queues(kafka)
Occasionally you checkpoint ur state into an S3 bucket


Flink has a job manager under the hood as a node(probably attached to a zookeeper instance)
The job manager has a barrier message for each producer node. 

the message is a part of the event queue and everytime a consumer processes a barrier message it checkpoints its state into S3. 



Barriers ensure causal consistency, node takes snapshot when it recieves barriers from all of its input queues and producers(not just one).
This means that if an event is played it is played in all of our snapshots and if it is not played then it is in none of our snapshots. 
Since the streams are run by kafka it saves the last message each consumer consumed. 

Every checkpoint only includes messages before the barriers so we can just resume each consumer reading messages after the barrier. 

Or restore everything from the S3 snapshot and read it from there. 

### Conclusion
Flink snapshots are super lightweight and run in the background
This allows ensuring that all message affect state exactly once,
Ensure that we dont have to replay every single message in the event of a crash