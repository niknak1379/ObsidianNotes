---
creation date: 2025-12-09 16:03
---
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

you can also have access policy pretty much like an s3. 

Theres also Temporary Queues
high throughput, cost effective, application managed temp queues when using common message patterns such as request-response. 

its in ur app instead of AWS??

supports both [[Short Polling]] and [[Long Polling]](polling)
