---
creation date: 2025-11-19 15:35
---
#03-Application-Architecture #FrontEnd #HTML #Accessiblity #Untitled

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Pub/Sub stuff

<< ---------------------------------------------------------------- >>
[[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/08-Stream Processing|08-Stream Processing]]

## SNS - Simple Notification Service
Highly available, durable secure fully managed pub/sub messaging service.

Has Topics and subscriptions 

Supports destination for both application and human(text, email, pager, etc...)

Types of topics:
Standard, FIFO(first in first out, guarantees order).

Messages:
Standard messages upto 256kb, can support up to 2gb if use the extended library which uses s3 as a middleware

Subscriptions:
can only describe one protocol and one topic.
Http, HTTps, Email, sqs, lambda, sms, application endpoint.

Filter Policy:
filter a subset of messages so that only the filtered ones get delivered. 

Scope: messageAttributes, MessageBody
Options: AND, OR logics, key matching, number matching

There is also data protection, to audit, mask, redact, or block sensitive information. 

Delivery Policy:
defines how SNS retries the delivery of messages when server-side errors occur. Each delivery protocol has its own delivery policy.  

If the retry limit is reached, it stops and discards the message unless there is a dead-letter queue. 

Dead-leater queue - DLQ sends failed messages there. which is a SQS queue

## SQS - Queue
deleted messages once they are consumed, and you have to pull, the queue will not push like in SNS. 

Again a Standard and a FIFO queue, FIFO is guaranteed order and no duplication

Standard Queue:
guarantees at least once delivery
generally delivered in the same order sent, but no guarantee
Could also batch messages like in SNS.

FIFO Queue:
guarantees order of messages when being consumed. There is a deduplicationID to ensure no duplicate messages in the queue.




messages between 1 byte and 256kb
message retention is 4 days by default, can be 60s to 14 days

There is also a SQS Extended Client library that extends the size to 2gb by using a s3 as middleware 

ABAC - Attribute-based access control:
authorization process that defines permissions based on tags that are attached to users and aws resouces. 

For example you can deny access from prod tagged machines. 

you can also have access plicy pretty much like an s3. 

Theres also Temporary Queues
high throughput, cost effective, application managed temp queues when using common message patterns such as request-response. 

its in ur app instead of AWS??

supports both [[Short Polling]] and [[Long Polling]](polling)

## Amazon MQ
ActiveMQ and rabbitMQ for AWS. [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/08-Stream Processing#Kafka Vs. RabbitMQ|kafka vs rabbitMQ]]

They are message brokers and not simple queues like SQS. 

### AMQP
both support AMQP - Advanced Message Queuing Protocol - that is an open standrad wire-level protocol, designed for messaging middleware that enables conforming client applications to communicate with conforming messaging middleware systems. 

### MQTT
MQ Telemetry Transport - a lightweight pub/sub messaging protocol MQTT uses minimal network bandwidth and often used in IoTs or real-time messaging apps. Suitable for machine-to-machine communication. 

### STOMP
Simple Text Based Wire Protocol, that allows clients to communicate with almost any message broker. 

