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