---
creation date: 2025-12-09 16:10
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Message Brokers

<< ---------------------------------------------------------------- >>

## Amazon MQ
ActiveMQ and rabbitMQ for AWS. [[03-Application-Architecture/Backend/Design-Patterns/System-Design-Basic-Concepts/08-Stream Processing#Kafka Vs. RabbitMQ|kafka vs rabbitMQ]]

They are message brokers and not simple queues like SQS. 

### AMQP
both support AMQP - Advanced Message Queuing Protocol - that is an open standrad wire-level protocol, designed for messaging middleware that enables conforming client applications to communicate with conforming messaging middleware systems. 

### MQTT
MQ Telemetry Transport - a lightweight pub/sub messaging protocol MQTT uses minimal network bandwidth and often used in IoTs or real-time messaging apps. Suitable for machine-to-machine communication. 

### STOMP
Simple Text Based Wire Protocol, that allows clients to communicate with almost any message broker. 

