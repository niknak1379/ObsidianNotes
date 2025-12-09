---
creation date: 2025-11-25 11:26
---


<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Kinesis Streams

<< ---------------------------------------------------------------- >>

fully managed solution for collecting, processing, and analyzing streaming data in the cloud. 

when you need real-time data processing.

Examples: stock prices, game data, social network data, geospatial data, click stream data

1. Kinesis Data Streams:
	1. real time streaming data service
	2. custom producers and conusmers
2. Kinesis Data Firehose
	1. serverless and a simpler version of data sreams. Direct integration with specific aws services
3. Managed Service for Apache Flink
	1. allows you to run queries against data that is flowing through your real-time stream so you can create reports and analysis on emerging data

Producers:
1. Amazon Kinesis Agent
	1. stand alone java app that will moitor files based on a pattern and send the data to kinesis
	2. in java only
2. AWS SDK
	1. PutRecord
		1. simple way to publish to a stream but does not scale
3. AWS Direct Integration
	1. aurora, cloudFront, DynamoDB, etc...
4. Amazon Kinesis Producer Library(KPL)
	1. in java only

Consumers:
1. Third Party:
	1. use other data streams or processing frameworks
2. Kinesis Data Firehose
	1. send data to firehose that directly integrates delivery to other AWS Services
3. AWS SDK
	1. use GetRecords
4. Amazon Kinesis Client Library
	1. java library to write your own custom consumers.
	2. MultiLang daemon allows multiple languages not just java

Data retention:
it will persist for 24 hours by default
can be changed to 365 days

## EFO - Enhanced Fan Out
allows up to 20 ocnsumers to recieve records from a stream with throughput of up to 2MB of data per second per shard. 

Conusmers must be configured using KCL - Amazon Kinesis Client library

## KPL - Kinesis Producer Library

managed library by aws to publish data, java only library

## KCL - Kinesis Client Library
Java library for consumers
uses multiland daemon underneath so u can use other languages like python and ruby on it.

## Data Firehose - (formerly Kinesis Firehose Delivery Systems)
allows for simple transformation and delivery of data

You dont have to manage shards and stuff like that since its a fully managed service. 

Producers:
1. Data Streams that can send to firehose
2. kafka -> if you use this the only destination can be s3
3. direct PUT(SDK, CLI)
4. A bunch of AWS services 


Consumers:
1. S3
2. Redshift
3. Opensearch
4. Custom HTTP endponits
5. Third party destinations
	1. splunk

Before data is sent to destination it can be transformed with AWS Lambda

Dynamic Partitioning:
enables you to continously partition streaming data in firehose, by using keys within data and then deliver the data grouped by the keys into S3 prefixes. 

Once you turn it on you cant turn it off. 

## Kinesis Video Streams
fully managed AWS service, to stream live video from devices to the AWS cloud, or build applications for real-time video processing or batch-oriented video

Producers:
- secuirty cam
- webcam
- mobile

Consumers:
- sagemaker
- rekognition
- tensorflow
- custom video processing

## Managed Service for Apache Flink
allows you to run queries against data that is flowing through your real-time stream so you can create reports and analysis on emerging data.  

It lets you run custom SQL

## Amazon MSK - Managed Streaming for Apache Kafka
fully managed service that enables you to build a streaming pipeline

Utilizes Zookeeper servers
Two types of Nodes 
- Broker Nodes - manage the broker isntances
- zookeeper nodes - managed overall structure of the cluster

Has both Provisioned and Serverless

Direct integrations with s3 and eventBridge

Has to be in the Same VPC or with public access.

uses kafka connect opensource framework for connecting apache kafka clusters with external systems such as databases, search indexes and file systems.



