---
creation date: 2025-10-29 21:07
---
#Untitled.md

<< ---------------------------------------------------------------- >>

 --- Last Modified: `$= dv.current().file.mtime`

# Services

<< ---------------------------------------------------------------- >>

1. Amazon SageMaker is a fully managed service to build, train, and deploy machine learning models at scale.
	1. it has multiple frameworks: Apache MXNet, TensorFLow, PyTorch

2. Amazon SageMaker Ground Truth is data-labeling service. Humans label a dataset that will be used to train machine learning models.

3. Amazon Augmented AI: Human intervention review service. When SageMaker's uses machine learning to make a prediction is not confient it has the right answer queue up the predication for human review.
4. Amazon CodeGuru: code analysis service
5. Amazon Lex: conversion interface service -> you can build text and voice chatbots
6. amazon personalize: a real time recommendations service.
7. amazon Polly: text to speach service
8. Amazon Rekognition: image and video recognition service
9. Amazon Transcribe: speach to text service
10. Amazon Textract and OCR(extract text from scanned documents)
11. Amazon Translate neural machine learning translation service
12. Amazon Comprehend: Natural Language Processor service. Find relatioships between text to produce insights. looks at data such as customer emails, support tickets, social media and make predictions.
13. Amazon Forecast: time-series forecasting service
14. AWS Deep Learning AMIs: EC2 instance with pyTorch MXNet etc...
15. AWS Deep Learning Containers: docker images instances pre insall with deel learning frameworks.
16. AWS DeepComposer: ML enabled musical keyboard
17. AWS DeepLens: video-camera that uses deep learning
18. AWS DeepRacer: a toy race car that can be powered with ML to perform autonomous driving
19. Amazon Elastic Inference: allows low cost GPU powered acceleration to EC2 for reduced cost deep learning
20. Amazon Fraud Detector: fully managed fraud detection service. 
21. Amazon Kendra Enterprise machine learning search engine service: use natural language to suggest answers to question instead of just simple keyword matching.


## Big Data and Analytics Services
Massive volumes of strucutred/unstructured data that is so large it is difficult to move and process using traditional DB and software techniques.

1. Amazon Athena is a serverless interactive query service. It can take a bunch of CSV or JSON files in a s3 bucket and laod them into temporary SQL tables to run SQL queries on.
2. Amazon CLoudSearch: fully managed full-text search service
3. Amazon Elasticsearch Service
4. Amazon Elastic MapReduce
5. Kiesis Data Streams
6. Kinesis Firehose: serverless and a simpler version of data streams, pay on demand 
7. Amazon Kinesis Data Analytics: run queries agaisnt the data through the stream
8. Amazon Kinesis Video Streams: allows you to analyze or apply processing on real-time streaming video.
9. Managed Kafka Service
10. Redshift: petabyte size big data warehouse.(vertical for online analytical processing - OLAP).
11. Amazon QuickSight: business intelligence Dashboard
12. AWS Data Pipeline automates the movement of data. reliabilty move data between compute and storage services
13. AWS Glue is an Extract, transform, Load service - similar to DMS(database migration service) but more robust
14. AWS Lake Formation is a centralized, curated and secured repository that stores all your data. A data lake is a storage repository that holds a vast amount of raw data in its native format until it is needed.
15. AWS Data Exchange is a catalogue of third-party datasets. You can download for free subscribe or purchase datasets.
16. Amazon Bedrock: LLM cloud service for text and image
17. Amazon CodeWhisper: Code generator
18. Amazon DevOps Guru: Use ML to analyze operational data and application metrics and events.
19. Amazon Lookout: use ML for quality control.
	1. For equipment
	2. For Metrics
	3. For vision
20. Amazon Monitron: uses ML models to predict unplanned equipment downtime with IoT sensors capture
21. AWS Neuron: SDK to run deep learning workloads on AWS



