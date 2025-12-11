---
creation date: 2025-12-09 16:05
---
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
