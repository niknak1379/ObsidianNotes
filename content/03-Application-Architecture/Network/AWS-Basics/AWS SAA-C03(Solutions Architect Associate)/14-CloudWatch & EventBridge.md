---
creation date: 2025-11-21 11:47
---
#03-Application-Architecture 

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Logging and Monitoring 

<< ---------------------------------------------------------------- >>

## CloudWatch

### The Pillars of Observability
Observability: measure and undersatnd how internal systems work to answer questions regarding performance, tolerance, security and faults with a system



Use metrics, logs and traces to do this and use them together. 

Theres also ALARMS that could be considered the fourth pillar outside of logs, traces and metrics


### Basics

Cloudwatch is the monitoring solution for AWS. 
It is not just one service but a collection of monitoring tools

- Logs -- Any custom log data, application Logs, NGINX logs, Lambda logs
- Metrics -- represents a time-ordered set of data points. A variable to monitor. EG.memory usage
- Events -- now Amazon EventBridge -- trigger an event based on a condition eg. every hour take snapshot of server
- Alarms -- triggers notifications based on metrics which breach a defined threshold
- Dashboards -- create visualizations based on metrics
- ServiceLens -- visualize and analyze the health, performance, availability of your serverless app in a single place
- Container Insights -- collect, aggregate and summerize metrics and lgos from containarized apps and microservices
- Synthetics -- test ur web-apps to see if theyre broken
- Contributor Insights -- view the top contributors impacting the performance of your systems and applications in real-time.


### CloudWatch Logs
can export to S3, ElasticSearch, can stream CloudTrail events to logs, there is filtering, all logs are kept indefinitely by default. 



It can collect a bunch of data based on the specific AWS service its collecting from. 

For EC2 theres, CPU usage, network usage, disk usage, status checks, 

If you install the Agent there is also memory utilization, disk swap utilization, disk space utilization, page file utilization, log collection.

### EventBridge

[[03-Application-Architecture/Backend/Design-Patterns/Microservices/Event Driven Architecture(EDA)|Event Driven Architecture(EDA)]]

you create rules that react to events. 
Supports Scheduled expressions which is basically a serverless Cron Jobs







