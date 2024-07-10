# Design Patterns for Data base Handling
https://www.youtube.com/watch?v=tiHKefWOyrY
different ways to couple micro-services with databases.
## Data base per service

## Saga pattern
has a **Message Broker**:
	they all send an event to the message brocker, and are subscribed to each others events, so one waits for the event of the last microservice to be processed and then proceeds with its own thing. If anything happens (error) you dont proceed with the forwards databases and you rollback any changes already processed.
## API composition pattern
you have one parent microservice that sends events to multiple microservices with their own DBs.
### Distributed Transactions Problem:
since now there is atomicity between databases, a new problem happens: if one database writes and the other one errors out:
	2-phase commit: 
		1. first issues a prepare command to each micro-service's DB
		2. after that the services can go back to the main service and tell it that no errors or deadlocks happened
		3. then the main service issues the second commit command to each micro-service and they will do the operation on the database
	if there are too many microservices with their own databases its going to be very messy, which results in the **SAGA pattern**.

## CQRS pattern - Command Query Responsibility Segregation
Basically have different DBs for Reads and Writes([[Read Replica]], since reads happen way more often, we can scale the read database separate from the write database.

Consistency:
1. when one write is happening write to all copies(a lot of overhead)
2. just copy the write DB everytime there is a write.
3. if time isnt critical(you dont have to update the reads within the same second as the write):
	1. use event sourcing pattern explained bellow

## Event Sourcing Pattern
used for finance stuff(not stock market that needs real time) banks that need transactions from the past. or a government records system, that you need to have the previous records.

you append evenets to the database.
you have an entire **Event Log(kafka stream)**, the stream is looking for an event and when it happens it streams all of it into the DB
## Shared Database anti-pattern
1. its an anti pattern because loses the main feature of micro-services: **Modularity and scalability and isolation**
2. Could cause **Deadlocks** (race conditions) none of the transactions can proceed.