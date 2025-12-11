---
creation date: 2025-12-10 19:50
---
#04-Tools #Secrets-Manager

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# 

<< ---------------------------------------------------------------- >>

### Traces and Spans
a trace is a data/execution path through the system and can be thought of as a directed acyclic graph(DAG) or spans. 

A Span represents a logical unit of work in Jaeger that has an operation name, the start time of the operation, and the duration.

SPans may be nested and ordered to model causal relationships. 

### Open Telemtery
Open source tools, APIs, and SDKs to generate collect and export telemtry data. It standardizes the way telemtery data(metrics, logs and traces) are generated and collected. 

Wire Protocol
Refers to a way of getting data from point to point. Eg. SOAP, AMQP

Basically competes with [[03-Application-Architecture/Network/AWS-Basics/Services/07-Logging/CloudWatch|CloudWatch]]

#### Instrumentation
is the act of embedding a monitoring library into your existing application in order to capture monitoring data such as metrics, traces or logging. 


### Collector
is an agent installed on the target machine, or as a dedicated server and is vendor agnostic way to receive, process and export telemetry data. 

### AWS Distro for OpenTelemtery
is a secure prod ready aws supported distribution of OpenTelemetry project. 
