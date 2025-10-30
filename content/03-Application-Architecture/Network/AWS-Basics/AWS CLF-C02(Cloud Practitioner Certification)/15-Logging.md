---
creation date: 2025-10-29 20:36
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Untitled

<< ---------------------------------------------------------------- >>
Logging Services:
1. CloutTrail - logs all API calls between AWS services
2. CloudWatch - a collection of multiple services
	1. CloudWatch Logs
	2. CloudWatch Events - (EventBridge) trigger an event based on a condition
	3. CloudWatch Metrics
	4. CloudWatch Alarms
	5. CloudWatch Dashboard
3. AWS X-Ray - Distributed tracing system, can pinpoint issues with microservices to see how data moves form one app to another. 


## CloudTrail
identify where when who what of API calls.

## CloudWatch Alarms
Monitors cloudWatch metric based on a defined threshold. 

When the state changes, it can do an alarm.

## CloudWatch Logs
Log Streams: a log stream represents a sequence of events from an application or instance being monitored.

Log Insights: Enables to interactively search and analyze cloudwatch log data 
It has more robust filtering than using the simple filter events in a log stream
Less burdensome than having to export logs to S3 and analyze them with Athena.

It has its own quereying language that can be used to query the logs

## CloudWatch metrics
time ordered set of data points.
There are predefined metrics for AWS name spaced services. Like CPUUtilization or DiskReadOps for EC2s. It lets you visually view all of those. 

